import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import {
  cancelNewTransaction,
  newTransaction,
  setTransactionComplete,
} from '../store/reducers/cardReducer';

const TransactionModal = ({ id, action }) => {
  const [count, setCount] = useState('');
  const card = useSelector((state) => state.cards.data.find((card) => card.id === Number(id)));
  const complete = useSelector((state) => state.cards.transactionComplete);
  const dispatch = useDispatch();

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        action();
      }
    },
    [action]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => document.removeEventListener('keydown', escFunction, false);
  }, [escFunction]);

  const handleChange = useCallback((event) => {
    setCount(event.target.value);
  }, []);

  const handleTransaction = useCallback(
    (e) => {
      e.preventDefault();

      if (isNaN(Number(count)) || count === '') {
        toast.error('Please, enter correct value');
        return;
      }

      const update = { data: { ...card }, id: id };
      update.data.balance = Number(update.data.balance);

      if (update.data.balance > count) {
        update.data.balance -= count;
        dispatch(newTransaction(update));
      } else {
        toast.error("You don't have enough money");
      }
    },
    [count, card, dispatch, id]
  );

  useEffect(() => {
    if (complete) {
      action();
    }
  }, [action, complete]);

  useEffect(() => {
    return () => {
      dispatch(setTransactionComplete(false));
      dispatch(cancelNewTransaction());
    };
  }, [dispatch]);

  return (
    <Background>
      <TransactionModalStyle>
        <CloseButton onClick={action}>&times;</CloseButton>
        <h1>Transaction: </h1>
        <form onSubmit={handleTransaction}>
          <input placeholder='Receiver' />
          <br />
          <input type='number' placeholder='Amount' onChange={handleChange} />
          <br />
          <SubmitButton type='submit'>Send</SubmitButton>
        </form>
      </TransactionModalStyle>
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(109, 108, 108, 0.6);
  z-index: 999;
`;

const TransactionModalStyle = styled.div`
  align-self: center;
  height: 380px;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;

  h1 {
    margin: 30px;
    font-size: 24px;
  }

  input {
    margin: 0 30px 20px 30px;
    width: calc(100% - 60px);
    padding: 20px;
    background-color: #eee;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  float: right;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: #eeeeee;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin: 15px 30px 20px 30px;
  width: calc(100% - 60px);
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: rgb(22, 98, 201);
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(38, 106, 201);
  }
`;

export default TransactionModal;
