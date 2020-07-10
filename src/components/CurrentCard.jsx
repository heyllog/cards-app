import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

import Buttons from './Buttons';
import CardInfo from './CardInfo';
import Loader from '../styles/Loader';

const CurrentCard = () => {
  const { id } = useParams();
  const cards = useSelector((state) => state.cards);
  const [card, setCard] = useState(null);
  const navigate = useNavigate();

  const goHome = useCallback(() => navigate('..'), [navigate]);

  useEffect(() => {
    if (cards.readyToUse) {
      setCard(cards.data.find((card) => card.id === Number(id)));
    }
  }, [cards.readyToUse, cards.data, id]);

  return (
    <>
      {!cards.readyToUse ? (
        <Loader />
      ) : card ? (
        <Info>
          <CloseButton onClick={goHome}>&times;</CloseButton>
          <CardInfo card={card} />
          <Buttons id={id} />
        </Info>
      ) : (
        <NonExist>No card with ID = {id}</NonExist>
      )}
    </>
  );
};

const Info = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 40px;
  height: 100vh;
  overflow: auto;
`;

const NonExist = styled.h1`
  display: flex;
  margin: auto auto;
  font-size: 50px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: #eeeeee;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default CurrentCard;
