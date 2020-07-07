import React from 'react';
import SideBar from '../styles/SideBar';
import { Card, Number, Balance } from '../styles/Card';
import { useSelector } from 'react-redux';
import Loader from '../styles/Loader';
import { Link } from 'react-router-dom';
import AddCard from './AddCard';

const CardList = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <SideBar>
      {!cards.status ? (
        <Loader />
      ) : (
        <>
          {cards.data.map((card) => (
            <Link to={`${card.id}`} key={card.id}>
              <Card>
                <Number>{card.number}</Number>
                <Balance>Balance: {card.balance}</Balance>
              </Card>
            </Link>
          ))}
          <AddCard />
        </>
      )}
    </SideBar>
  );
};

export default CardList;
