import React, { useEffect } from 'react';
import { Global, css } from '@emotion/core';
import styled from "@emotion/styled";
import { useRoutes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cancelOperation, loadData } from './store/reducers/cardReducer';
import CardsMain from './components/CardsMain';
import CurrentCard from './components/CurrentCard';

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
    return () => dispatch(cancelOperation());
  }, [dispatch]);

  // TODO /cards
  let routes = useRoutes([
    {
      path: '/',
      element: <CardsMain />,
      children: [{ path: ':id', element: <CurrentCard /> }],
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
