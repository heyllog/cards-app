import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../styles/Loader';
import Info from '../styles/Info';
import TransactionButton from './TransactionButton';
import CardList from "./CardList";

const CardInfo = () => {
  let { id } = useParams();
  // TODO избыточные cards.data[id].number
  const cards = useSelector((state) => state.cards);

  return (
    <>
      {!cards.status ? (
        <Loader />
      ) : (
        <Info>
          <div className='card-info'>
            <p>{`Number: ${cards.data[id].number}`}</p>
            <p>{`Name: ${cards.data[id].name}`}</p>
            <p>{`Date: ${cards.data[id].date}`}</p>
            <p>{`CVV: ${cards.data[id].cvv}`}</p>
            <p>{`Balance: ${cards.data[id].balance}`}</p>
          </div>
          <div className='buttons'>
            <TransactionButton title='New Transaction' />
            <TransactionButton title='Delete card' />
          </div>
        </Info>
      )}
    </>
  );
};

export default CardInfo;
