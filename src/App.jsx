import React, { useEffect } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useRoutes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cancelLoadData, loadData } from './store/reducers/cardReducer';
import CardsMain from './components/CardsMain';
import CurrentCard from './components/RightSide/CurrentCard';

const routesConfig = [
  {
    path: '/',
    element: <CardsMain />,
    children: [{ path: ':id', element: <CurrentCard /> }],
  },
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
    return () => dispatch(cancelLoadData());
  }, [dispatch]);

  // TODO при path cards не загружает страницы по id при перезагрузке
  let routes = useRoutes(routesConfig);

  return (
    <CardApp>
      <Global styles={GLOBAL} />
      {routes}
    </CardApp>
  );
}

const GLOBAL = css`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
  }

  body {
    background-color: #f9f9fd;
  }
`;

const CardApp = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
`;

export default App;
