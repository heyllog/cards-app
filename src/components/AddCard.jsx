import React, { useCallback, useState } from 'react';
import NewCard from '../styles/NewCard';
import { useDispatch } from 'react-redux';
import { addNewCard } from '../store/reducers/cardReducer';

const formValidation = (number, date, name, cvv, balance) => {
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
};

const AddCard = (callback, inputs) => {
  const [visible, setVisible] = useState(false);
  const [number, setNumber] = useState(null);
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [balance, setBalance] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // if (formValidation(number, date, name, cvv, balance)) {
      dispatch(
        addNewCard({
          number,
          date,
          name,
          cvv,
          balance,
        })
      );
    // }
  }, []);

  return (
    <NewCard>
      {!visible && (
        <button className='open-btn' onClick={() => setVisible(!visible)}>
          +
        </button>
      )}
      {visible && (
        <form onSubmit={handleSubmit}>
          <button className='close-btn' onClick={() => setVisible(!visible)}>
            &times;
          </button>
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
      )}
    </NewCard>
  );
};

export default AddCard;
