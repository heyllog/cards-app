import React, { useCallback, useState } from 'react';

import Button from './reusable/Button';
import TransactionModal from './TransactionModal';
import DeleteModal from './DeleteModal';

const ActionButtons = ({ id }) => {
  const [createTransaction, setCreateTransaction] = useState(false);
  const [acceptDelete, setAcceptDelete] = useState(false);

  const setTransactionModalState = useCallback(() => setCreateTransaction(!createTransaction), [
    createTransaction,
  ]);
  const setDeletionModalState = useCallback(() => setAcceptDelete(!acceptDelete), [acceptDelete]);

  return (
    <div>
      {createTransaction && <TransactionModal id={id} action={setTransactionModalState} />}
      <Button
        title='New Transaction'
        action={() => setCreateTransaction(!createTransaction)}
        color='linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)'
      />
      {acceptDelete && <DeleteModal id={id} action={setDeletionModalState} />}
      <Button
        title='Delete card'
        action={() => setAcceptDelete(!acceptDelete)}
        color='linear-gradient(150deg, #ED213A 0%, #93291E 100%)'
      />
    </div>
  );
};

export default ActionButtons;
