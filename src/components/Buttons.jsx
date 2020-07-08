import React, { useEffect, useState } from 'react';
import Button from './reusable/Button';
import { useDispatch, useSelector } from 'react-redux';

import { cancelDeleteCard, cancelNewTransaction } from '../store/reducers/cardReducer';
import TransactionModal from './TransactionModal';
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const Buttons = ({ id }) => {
  const [transaction, setTransaction] = useState(false);
  const [acceptDelete, setAcceptDelete] = useState(false);
  const deleted = useSelector((state) => state.cards.wasDeleted);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (deleted === id) navigate('..');
  }, [deleted, id, navigate]);

  // useEffect(() => {
  //   console.log('change');
  //   console.log(transaction, acceptDelete);
  //   debugger
  // }, [transaction, acceptDelete]);

  // useEffect(() => {
  //   return () => {
  //     // TODO почему они оба false
  //     // TODO скорее всего надо вынести в родитель
  //     // console.log('unmount');
  //     // console.log(transaction, acceptDelete);
  //     // debugger
  //     if (acceptDelete) {
  //       console.log('delete');
  //       dispatch(cancelDeleteCard());
  //     } else if (transaction) {
  //       console.log('transaction');
  //       dispatch(cancelNewTransaction());
  //     } else {
  //       console.log('else');
  //       dispatch(cancelNewTransaction());
  //       dispatch(cancelDeleteCard());
  //     }
  //   };
  // }, [dispatch]);

  return (
    <div>
      {transaction && <TransactionModal id={id} action={() => setTransaction(!transaction)} />}
      <Button title='New Transaction' action={() => setTransaction(!transaction)} />
      {acceptDelete && <DeleteModal id={id} action={() => setAcceptDelete(!acceptDelete)} />}
      <Button title='Delete card' action={() => setAcceptDelete(!acceptDelete)} />
    </div>
  );
};

export default Buttons;
