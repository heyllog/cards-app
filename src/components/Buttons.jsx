import React, { useState } from 'react';
import TransactionButton from './TransactionButton';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../store/reducers/cardReducer';
import { Link } from 'react-router-dom';
import TransactionModal from './TransactionModal';

const Buttons = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      {visible && <TransactionModal id={id} action={() => setVisible(!visible)} />}
      <TransactionButton title='New Transaction' action={() => setVisible(!visible)} />
      <Link to='/'>
        <TransactionButton title='Delete card' action={() => dispatch(deleteCard(id))} />
      </Link>
    </div>
  );
};

export default Buttons;
