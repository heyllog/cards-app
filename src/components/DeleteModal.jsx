import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { deleteCard } from '../store/reducers/cardReducer';

const DeleteModal = ({ id, action }) => {
  const dispatch = useDispatch();

  return (
    <Background>
      <TransactionModalStyle>
        <h1>Are you sure? </h1>
        <button onClick={() => dispatch(deleteCard(id))}>Yes</button>
        <button onClick={action}>No</button>
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
  height: 100px;
  width: 400px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
`;

export default DeleteModal;
