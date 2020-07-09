import React, { useEffect, useState } from 'react';
import Button from './reusable/Button';
import { useSelector } from 'react-redux';

import TransactionModal from './TransactionModal';
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const Buttons = ({ id }) => {
  const [transaction, setTransaction] = useState(false);
  const [acceptDelete, setAcceptDelete] = useState(false);
  const deleted = useSelector((state) => state.cards.wasDeleted);
  const navigate = useNavigate();

  useEffect(() => {
    if (deleted === id) navigate('..');
  }, [deleted, id, navigate]);

  return (
    <div>
      {transaction && <TransactionModal id={id} action={() => setTransaction(!transaction)} />}
      <Button
        title='New Transaction'
        action={() => setTransaction(!transaction)}
        color='linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)'
      />
      {acceptDelete && <DeleteModal id={id} action={() => setAcceptDelete(!acceptDelete)} />}
      <Button
        title='Delete card'
        action={() => setAcceptDelete(!acceptDelete)}
        color='linear-gradient(150deg, #ED213A 0%, #93291E 100%)'
      />
    </div>
  );
};

export default Buttons;
