import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

import Loader from '../styles/Loader';
import AddCard from './AddCard';
import Card from './reusable/Card';

const CardList = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <SideBar>
      {!cards.readyToUse ? (
        <Loader />
      ) : (
        <>
          {cards.data.map((card) => (
            <Link to={`${card.id}`} key={card.id}>
              <Card number={card.number} balance={card.balance} name={card.name} />
            </Link>
          ))}
          <AddCard />
        </>
      )}
    </SideBar>
  );
};

const SideBar = styled.div`
  background-color: #eeeeee;
  min-width: 350px;
  max-width: 350px;
  height: 100vh;
  overflow: auto;

  a {
    text-decoration: none;
    color: white;
  }
`;

export default CardList;
