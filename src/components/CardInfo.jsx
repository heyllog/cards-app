import React from 'react';
import styled from '@emotion/styled';
import { Card } from '../styles/Card';

const CardInfo = ({ card }) => {
  return (
    <CardInfoStyle>
      <Card>
        <p>{card.number}</p><br/>
        <p>{`Name: ${card.name}`}</p>
        <p>{`Date: ${card.date}`}</p>
        <p>{`CVV: ${card.cvv}`}</p>
        <p>{`Balance: ${card.balance}$`}</p>
      </Card>
    </CardInfoStyle>
  );
};

const CardInfoStyle = styled.div`
  margin-right: auto;
  padding: 30px;
`;

export default CardInfo;
