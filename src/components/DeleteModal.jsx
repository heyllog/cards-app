import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { cancelDeleteCard, deleteCard, setDeleted } from '../store/reducers/cardReducer';
import { useNavigate } from 'react-router-dom';

const DeleteModal = ({ id, action }) => {
  const dispatch = useDispatch();
  const complete = useSelector((state) => state.cards.wasDeleted);
  const deleted = useSelector((state) => state.cards.wasDeleted);
  const navigate = useNavigate();

  // Close on esc press
  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        action();
      }
    },
    [action]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => document.removeEventListener('keydown', escFunction, false);
  }, [escFunction]);

  // Go home page after delete
  useEffect(() => {
    if (deleted === id) navigate('..');
  }, [deleted, id, navigate]);

  // After complete close window
  useEffect(() => {
    if (complete) action();
  }, [complete, action]);

  useEffect(() => {
    return () => {
      dispatch(setDeleted(null));
      dispatch(cancelDeleteCard());
    };
  }, [dispatch]);

  const handleDeletion = useCallback(() => dispatch(deleteCard(id)), [dispatch, id]);

  return (
    <Background>
      <TransactionModalStyle>
        <h1>Delete this card?</h1>
        <Button onClick={handleDeletion}>Yes, delete it</Button>
        <Button onClick={action}>Cancel</Button>
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
  height: 260px;
  width: 400px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
  text-align: center;

  h1 {
    margin: 10px 15px 15px 15px;
    font-size: 24px;
  }
`;

// Styles
const Button = styled.button`
  //margin: 25px 30px 20px 30px;
  margin-top: 20px;
  width: calc(100% - 60px);
  padding: 10px 20px;
  text-align: center;
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
