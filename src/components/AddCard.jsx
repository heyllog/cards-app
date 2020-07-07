import React, { useState } from 'react';
import { NewCard, OpenButton } from '../styles/NewCard';
import Form from './Form';

const AddCard = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = (e, status) => {
    e.preventDefault();
    setVisible(status);
  };

  return (
    <NewCard>
      {visible ? (
        <Form handleVisible={handleVisible} />
      ) : (
        <OpenButton onClick={() => setVisible(!visible)}>+</OpenButton>
      )}
    </NewCard>
  );
};

export default AddCard;
