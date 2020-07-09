import React from 'react';
import styled from '@emotion/styled';

const CardInfo = ({ card }) => {
  // const formattedNumber = `
  // ${card.number.slice(0, 4)} ${card.number.slice(4, 8)} ${card.number.slice(8, 12)} ${card.number.slice(12)}
  // `;

  const formattedNumber =
    card.number.slice(0, 4) +
    ' ' +
    card.number.slice(4, 8) +
    ' ' +
    card.number.slice(8, 12) +
    ' ' +
    card.number.slice(12);

  return (
    <CardInfoStyle>
      <Balance>
        <span>{`Balance: ${card.balance}$`}</span>
      </Balance>

      <Information>
        <h1>Card Info </h1>
        <p>
          Number: <br />
          <span>{formattedNumber}</span>
        </p>
        <p>
          Name: <br />
          <span>{card.name}</span>
        </p>
        <p>
          Date: <br />
          <span>{card.date}</span>
        </p>
        <p>
          CVV: <br />
          <span>{card.cvv}</span>
        </p>
      </Information>
    </CardInfoStyle>
  );
};

const CardInfoStyle = styled.div`
  margin-right: auto;
  padding: 30px;
`;

const Balance = styled.div`
  display: flex;
  width: 460px;
  //width: 100%;
  height: 120px;
  margin: 10px 0;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  background-color: #fff;
  align-items: center;
  justify-content: center;

  span {
    font-size: 40px;
  }
`;

const Information = styled.div`
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  margin-top: 40px;

  h1 {
    margin-bottom: 20px;
    padding: 20px 40px;
    text-align: center;
    font-size: 40px;
    background-color: #eeeeee;
  }

  p {
    font-size: 16px;
    color: gray;
    //padding: 0 40px;
    margin: 20px 40px;
  }

  span {
    color: black;
    font-size: 24px;
  }
`;

export default CardInfo;
