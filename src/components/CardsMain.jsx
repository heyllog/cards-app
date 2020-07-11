import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardList from './LeftSide/CardList';
import styled from '@emotion/styled';

const CardsMain = () => {
  return (
    <MainStyle>
      <CardList />
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Outlet />
    </MainStyle>
  );
};

const MainStyle = styled.div`
  display: flex;
  align-items: center;
  width: 1440px;
  z-index: 1;
`;

export default CardsMain;
