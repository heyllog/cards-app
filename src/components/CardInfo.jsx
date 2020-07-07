import React from 'react';
import styled from '@emotion/styled';

const CardInfoStyle = styled.div`
  margin-right: auto;
`;

const CardInfo = ({ card }) => {
  return (
    <CardInfoStyle>
      <p>{`Number: ${card.number}`}</p>
      <p>{`Name: ${card.name}`}</p>
      <p>{`Date: ${card.date}`}</p>
      <p>{`CVV: ${card.cvv}`}</p>
      <p>{`Balance: ${card.balance}`}</p>
    </CardInfoStyle>
  );
};

export default CardInfo;
