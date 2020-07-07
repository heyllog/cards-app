import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewCard } from '../store/reducers/cardReducer';
import { CloseButton } from '../styles/NewCard';

const formValidation = (number, date, name, cvv, balance) => {
  try {
    return true;
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
    <form onSubmit={handleSubmit}>
      {/*TODO кнопка закрытия*/}
      {/*<CloseButton*/}
      {/*  onClick={(e) => {*/}
      {/*    e.preventDefault();*/}
      {/*    handleVisible(false);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  &times;*/}
      {/*</CloseButton>*/}
      <br />
      <label>
        Number:
        <input type='text' onChange={(e) => setNumber(e.target.value)} />
      </label>
      <label>
        Date:
        <input type='text' onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Name:
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        CVV:
        <input type='text' onChange={(e) => setCvv(e.target.value)} />
      </label>
      <label>
        Balance:
        <input type='text' onChange={(e) => setBalance(e.target.value)} />
      </label>

      <button className='add-btn' type='submit'>
        Add Card
      </button>
    </form>
  );
};

export default Form;
