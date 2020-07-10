import React, { useState } from 'react';
import Button from './reusable/Button';

import TransactionModal from './TransactionModal';
import DeleteModal from './DeleteModal';

const Buttons = ({ id }) => {
  const [transaction, setTransaction] = useState(false);
  const [acceptDelete, setAcceptDelete] = useState(false);

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
