import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import Buttons from './Buttons';
import CardInfo from './CardInfo';
import Loader from '../styles/Loader';
import { cancelAddNewCard } from '../store/reducers/cardReducer';

const CurrentCard = () => {
  const { id } = useParams();
  const cards = useSelector((state) => state.cards);
  const [card, setCard] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cards.readyToUse) {
      setCard(cards.data.find((card) => card.id === Number(id)));
    }
  }, [cards.readyToUse, cards.data, id]);

  useEffect(() => {
    return () => dispatch(cancelAddNewCard());
  }, [dispatch]);

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
        <h1>No card</h1>
      )}
    </>
  );
};

const Info = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 40px;
`;

export default CurrentCard;
