import React, { useEffect } from 'react';
import SideBar from '../styles/SideBar';
import Card from '../styles/Card';
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
                <p className='number'>{card.number}</p>
                <p className='balance'>Balance: {card.balance}</p>
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
