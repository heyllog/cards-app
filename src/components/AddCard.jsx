import React, { useState } from 'react';
import styled from '@emotion/styled';

import Form from './Form';

const AddCard = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CreateCard>
      {visible ? (
        <Form handleVisible={() => setVisible(!visible)} />
      ) : (
        <OpenButton onClick={() => setVisible(!visible)}>+</OpenButton>
      )}
    </CreateCard>
  );
};

const OpenButton = styled.button`
  width: 310px;
  height: 200px;
  margin: auto;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

const CreateCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 210px;
  margin: 20px auto;
  padding: 5px;
  border-radius: 10px;
  background-image: linear-gradient(
    to right bottom,
    rgba(58, 123, 213, 0.9),
    rgba(58, 96, 115, 0.9)
  );
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
`;

export default AddCard;
