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
      <button
        onClick={(e) => {
          e.preventDefault();
          handleVisible();
        }}
      >
        &times;
      </button>
      <br />
      <input type='text' placeholder='Number' onChange={(e) => setNumber(e.target.value)} />
      <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <SmallInput type='text' placeholder='Expires' onChange={(e) => setDate(e.target.value)} />
      <SmallInput type='text' placeholder='CVV' onChange={(e) => setCvv(e.target.value)} />
      <SmallInput type='text' placeholder='Balance' onChange={(e) => setBalance(e.target.value)} />
      // TODO redirect на новую карточку
      <button type='submit'>Add Card</button>
    </FormStyle>
  );
};

const SmallInput = styled.input``;

const FormStyle = styled.form`
  input {
    margin: 5px;
    width: calc(100% - 10px);
    padding: 5px;
    border-radius: 5px;
    border: none;
  }

  ${SmallInput} {
    width: 93px;
  }
`;

export default Form;
