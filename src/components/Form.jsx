import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { addNewCard } from '../store/reducers/cardReducer';

const formValidation = (number, date, name, cvv, balance) => {
  try {
    // TODO notifications
    if (!(number && date && name && cvv && balance)) {
      console.log('Null exception');
      return false;
    }
    if (number.length !== 16) {
      console.log('Number error');
      return false;
    }
    if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date)) {
      console.log('Date error');
      return false;
    }
    if (name.length < 5) {
      console.log('Name error');
      return false;
    }
    if (cvv.length !== 3) {
      console.log('CVV error');
      return false;
    }
    if (Number(balance) < 0) {
      console.log('Balance error');
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

const Form = ({ handleVisible }) => {
  const [number, setNumber] = useState(null);
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [balance, setBalance] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
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
  };

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
      <input type='text' placeholder='Number' onChange={(e) => setNumber(e.target.value)} />
      <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <SmallInput type='text' placeholder='Expires' onChange={(e) => setDate(e.target.value)} />
      <SmallInput type='text' placeholder='CVV' onChange={(e) => setCvv(e.target.value)} />
      <SmallInput type='text' placeholder='Balance' onChange={(e) => setBalance(e.target.value)} />
      {/*TODO redirect на новую карточку*/}
      <AddButton type='submit'>Add Card</AddButton>
    </FormStyle>
  );
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
`;

const AddButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(58, 123, 213);
  color: white;
  margin: 0 5px;
  width: calc(100% - 10px);
`;

export default Form;
