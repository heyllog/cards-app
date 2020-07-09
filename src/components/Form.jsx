import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  number as checkNumber,
  expirationDate as checkDate,
  cvv as checkCvv,
} from 'card-validator';
import { addNewCard, cancelAddNewCard, setCardCreated } from '../store/reducers/cardReducer';

const Form = ({ handleVisible }) => {
  const [number, setNumber] = useState(null);
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [balance, setBalance] = useState(null);
  const dispatch = useDispatch();
  const newCard = useSelector((state) => state.cards.cardCreated);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (formValidation(number, date, name, cvv, balance)) {
        dispatch(
          addNewCard({
            number,
            date,
            name,
            cvv,
            balance,
          })
        );
      }
    },
    [number, date, name, cvv, balance]
  );

  useEffect(() => {
    if (newCard !== null) {
      navigate('/' + newCard);
      handleVisible();
    }
  }, [newCard, navigate]);

  useEffect(() => {
    return () => {
      dispatch(setCardCreated(null));
      dispatch(cancelAddNewCard());
    };
  }, [dispatch]);

  return (
    <FormStyle onSubmit={handleSubmit}>
      <CloseButton
        onClick={(e) => {
          e.preventDefault();
          handleVisible();
        }}
      >
        &times;
      </CloseButton>
      <br />
      <input
        type='number'
        placeholder='Number'
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <SmallInput placeholder='Expires' onChange={(e) => setDate(e.target.value)} />
      <SmallInput
        type='number'
        placeholder='CVV'
        onChange={(e) => setCvv(Number(e.target.value))}
      />
      <SmallInput
        type='number'
        placeholder='Balance'
        onChange={(e) => setBalance(Number(e.target.value))}
      />
      <AddButton type='submit'>Add Card</AddButton>
    </FormStyle>
  );
};

const formValidation = (number, date, name, cvv, balance) => {
  try {
    if (!checkNumber(number).isValid) {
      toast.error('Number error');
      return false;
    }
    if (!name) {
      toast.error('Name error');
      return false;
    }
    if (typeof name !== 'string' || name.length < 5) {
      toast.error('Name error');
      return false;
    }
    if (!checkDate(date).isValid) {
      toast.error('Date error');
      return false;
    }
    if (!checkCvv(cvv.toString()).isValid) {
      toast.error('CVV error');
      return false;
    }
    if (!balance) {
      toast.error('Balance error');
      return false;
    }
    if (Number(balance) < 0) {
      toast.error('Balance error');
      return false;
    }
    return true;
  } catch (e) {
    toast.error(e.message);
    return false;
  }
};

const SmallInput = styled.input``;

const FormStyle = styled.form`
  position: relative;

  input {
    margin: 0 5px 10px 5px;
    width: calc(100% - 10px);
    padding: 5px;
    border-radius: 5px;
    border: none;
    outline: none;
    appearance: none;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  ${SmallInput} {
    width: 93px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const AddButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 7px;
  background-color: rgb(22, 98, 201);
  color: white;
  margin: 0 5px;
  width: calc(100% - 10px);
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(38, 106, 201);
  }
`;

export default Form;
