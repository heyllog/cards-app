import React from 'react';
import styled from '@emotion/styled';

const Card = ({ number, name, balance }) => {
  return (
    <CardStyle>
      <CardPart>
        <CardSquare src='https://image.ibb.co/cZeFjx/little_square.png' alt='' />
        <CardNumber>{formatNumber(number)}</CardNumber>
        <CardSpace60>
          <CardLabel>Card holder</CardLabel>
          <CardInfo>{formatName(name)}</CardInfo>
        </CardSpace60>
        <CardSpace40>
          <CardLabel>Balance</CardLabel>
          <CardInfo>{formatBalance.format(balance)}</CardInfo>
        </CardSpace40>
      </CardPart>
    </CardStyle>
  );
};

// Formatters
const formatName = (fullName) => {
  let formattedName = fullName.split(' ');
  formattedName[0] = formattedName[0][0] + '. ';
  return formattedName.join('');
};

const formatBalance = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

const formatNumber = (number) => {
  return '**** **** **** ' + number.toString().slice(12);
};

// Styles
const CardStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i');

  * {
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  width: 320px;
  height: 210px;
  margin: 20px auto;
  perspective: 600px;
`;

const CardPart = styled.div`
  display: inline-block;
  width: 320px;
  height: 210px;
  z-index: 980;
  box-shadow: 1px 1px #aaa3a3;
  background-image: url('https://image.ibb.co/bVnMrc/g3095.png'),
    linear-gradient(to right bottom, #3a7bd5, #3a6073);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  padding: 18px;
`;

const CardSquare = styled.img`
  border-radius: 5px;
  height: 30px;
`;

const CardNumber = styled.p`
  display: block;
  width: 100%;
  word-spacing: 4px;
  font-size: 20px;
  letter-spacing: 2px;
  color: #fff;
  text-align: center;
  margin-bottom: 27px;
  margin-top: 30px;
`;

const CardSpace60 = styled.div`
  width: 65%;
  float: left;
`;

const CardSpace40 = styled.div`
  width: 35%;
  float: left;
`;

const CardLabel = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
`;

const CardInfo = styled.p`
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default Card;
