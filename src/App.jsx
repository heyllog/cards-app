import React, { useEffect } from 'react';
import { Global, css } from '@emotion/core';
import CardList from './components/CardList';
import Cards from './components/Cards';
import CardApp from './styles/CardApp';
import { Route, Routes, useRoutes, Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cancelLoadData, loadData } from './store/reducers/cardReducer';
import CardInfo from "./components/CardInfo";

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

// function Invoices() {
//   return (
//     <div>
//       <h1>Invoices</h1>
//
//       {/*
//         This element renders the element for the child route, which in
//         this case will be either <SentInvoices> or <IndividualInvoice>
//       */}
//       <Outlet />
//     </div>
//   );
// }
//
// function IndividualInvoice() {
//   let { invoiceId } = useParams();
//   return <h1>Invoice {invoiceId}</h1>;
// }
//
// function SentInvoices() {
//   return <h1>Sent Invoices</h1>;
// }

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
    return () => dispatch(cancelLoadData());
  }, [dispatch]);

  let routes = useRoutes([
    {
      path: '/',
      element: <Cards />,
      children: [
        { path: ':id', element: <CardInfo /> },
      ],
    },
  ]);

  return (
    <CardApp>
      <Global styles={GLOBAL} />

      {routes}

      {/*<Routes>*/}
      {/*  <Route path="invoices" element={<Invoices />}>*/}
      {/*    <Route path=":invoiceId" element={<IndividualInvoice />} />*/}
      {/*    <Route path="sent" element={<SentInvoices />} />*/}
      {/*  </Route>*/}
      {/*</Routes>*/}

    </CardApp>
  );
}

export default App;
