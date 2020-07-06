import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import CardList from "./components/CardList";

const GLOBAL = css`
  //@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }

  body {
    background-color: #f9f9fd;
  }
`;

function App() {
  return (
    <>
      <Global styles={GLOBAL} />
      <CardList/>

    </>
    // <BrowserRouter>
    //
    //
    //
    //
    // </BrowserRouter>
  );
}

export default App;
