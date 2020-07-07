import React from 'react';
import { Card, Number, Balance } from '../styles/Card';
import { useSelector } from 'react-redux';
import Loader from '../styles/Loader';
import { Link } from 'react-router-dom';
import AddCard from './AddCard';
import styled from '@emotion/styled';
import { NewCard } from '../styles/Card';

const CardList = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <SideBar>
      <NewCard />
      {!cards.status ? (
        <Loader />
      ) : (
        <>
          {cards.data.map((card) => (
            <Link to={`${card.id}`} key={card.id}>
              <Card>
                <Number>{card.number}</Number>
                <Balance>Balance: {card.balance}$</Balance>
              </Card>
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

  a {
    text-decoration: none;
    color: white;
  }
`;

export default CardList;
