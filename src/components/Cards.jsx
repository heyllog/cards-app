import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import CardList from './CardList';

const Cards = () => {
  return (
    <>
      <CardList />
      <Outlet />
    </>
  );
};

export default Cards;
