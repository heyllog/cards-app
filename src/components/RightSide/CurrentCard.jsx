import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

import ActionButtons from './ActionButtons';
import CardInfo from './CardInfo';
import Loader from '../reusable/Loader';

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
          <ActionButtons id={id} />
        </Info>
      ) : (
        <NonExist>No card with ID = {id}</NonExist>
      )}
    </>
  );
};

// Styles
const Info = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 40px;
  height: 100vh;
  overflow: auto;
  background-color: #f5f5f5;
`;

const NonExist = styled.h1`
  display: flex;
  margin: auto;
  font-size: 50px;
`;

export default CurrentCard;
