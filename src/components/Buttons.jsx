import React from 'react';
import TransactionButton from './TransactionButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard, newTransaction } from '../store/reducers/cardReducer';
import { Link } from 'react-router-dom';

const Buttons = ({ id }) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.cards.data[id]);

  const handleTransaction = () => {
    const update = { data: { ...card }, id: id };
    update.data.balance = Number(update.data.balance) - 10;
    dispatch(newTransaction(update));
  };

  return (
    <div>
      <TransactionButton title='New Transaction' action={handleTransaction} />
      <Link to='/'>
        <TransactionButton title='Delete card' action={() => dispatch(deleteCard(id))} />
      </Link>
    </div>
  );
};

export default Buttons;
