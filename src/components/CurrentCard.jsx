import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

import Buttons from './Buttons';
import CardInfo from './CardInfo';
import Loader from '../styles/Loader';

const CurrentCard = () => {
  const { id } = useParams();
  const cards = useSelector((state) => state.cards);
  const [card, setCard] = useState(null);

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

export default CurrentCard;
