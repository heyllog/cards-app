import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { cancelDeleteCard, deleteCard, setDeleted } from '../store/reducers/cardReducer';
import { useNavigate } from 'react-router-dom';

const DeleteModal = ({ id, action }) => {
  const dispatch = useDispatch();
  const complete = useSelector((state) => state.cards.wasDeleted);
  const deleted = useSelector((state) => state.cards.wasDeleted);
  const navigate = useNavigate();

  useEffect(() => {
    if (deleted === id) navigate('..');
  }, [deleted, id, navigate]);

  useEffect(() => {
    if (complete) action();
  }, [complete, action]);

  useEffect(() => {
    return () => {
      dispatch(setDeleted(null));
      dispatch(cancelDeleteCard());
    };
  }, [dispatch]);

  return (
    <Background>
      <TransactionModalStyle>
        <h1>Are you sure? </h1>
        <Button onClick={() => dispatch(deleteCard(id))}>Yes</Button>
        <Button onClick={action}>No</Button>
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
  height: 160px;
  width: 400px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
`;

const Button = styled.button`
  margin: 25px 30px 20px 30px;
  width: calc(50% - 60px);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: rgb(22, 98, 201);
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(38, 106, 201);
  }
`;

export default DeleteModal;
