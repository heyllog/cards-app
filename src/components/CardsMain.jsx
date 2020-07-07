import React from 'react';
import { Outlet } from 'react-router-dom';
import CardList from './CardList';

const CardsMain = () => {
  return (
    <>
      <CardList />
      <Outlet />
    </>
  );
};

export default CardsMain;
