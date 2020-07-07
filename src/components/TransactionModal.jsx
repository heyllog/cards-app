import React, { useState } from 'react';
import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { newTransaction } from '../store/reducers/cardReducer';

const TransactionModal = ({ id, action }) => {
  const [count, setCount] = useState('');
  const [error, setError] = useState(false);
  const card = useSelector((state) => state.cards.data[id]);
  const dispatch = useDispatch();

  const handleTransaction = (e) => {
    setError(false);
    e.preventDefault();

    if (isNaN(Number(count)) || count === '') {
      setError(true);
      return;
    }

    const update = { data: { ...card }, id: id };
    update.data.balance = Number(update.data.balance);

    if (update.data.balance > count) {
      update.data.balance -= count;
      dispatch(newTransaction(update));
      setCount('');
    } else {
      setError(true);
    }
  };

  return (
    <Background>
      <TransactionModalStyle>
        <button onClick={action}>&times;</button>
        <h1>Transaction: </h1>
        <form onSubmit={handleTransaction}>
          <label>
            Receiver: <input />
          </label>
          <label>
            Count: <input onChange={(e) => setCount(e.target.value)} />
          </label>
          {error && <span>Error</span>}
          <button type='submit'>Send</button>
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
  height: 500px;
  width: 800px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
`;

export default TransactionModal;
