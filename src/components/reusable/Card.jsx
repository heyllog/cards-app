import React from 'react';
import styled from '@emotion/styled';

const Card = ({ number, name, balance }) => {
  const formattedNumber = `
  ${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8, 12)} ${number.slice(12)}
  `;

  return (
    <CardStyle>
      <div className='card'>
        <div className='card__front card__part'>
          <img
            className='card__front-square card__square'
            src='https://image.ibb.co/cZeFjx/little_square.png'
            alt=''
          />
          {/*TODO форматирование номера*/}
          <p className='card_number'>{formattedNumber}</p>
          <div className='card__space-75'>
            <span className='card__label'>Card holder</span>
            <p className='card__info'>{name}</p>
          </div>
          <div className='card__space-25'>
            <span className='card__label'>Balance</span>
            <p className='card__info'>{balance} $</p>
          </div>
        </div>
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i');

  * {
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
  }

  .card {
    width: 320px;
    height: 190px;
    margin: 20px auto;
    perspective: 600px;
  }

  .card__part {
    top: 0;
    position: absolute;
    left: 0;
    display: inline-block;
    width: 320px;
    height: 190px;
    z-index: 980;
    box-shadow: 1px 1px #aaa3a3;
    background-image: url('https://image.ibb.co/bVnMrc/g3095.png'),
      linear-gradient(to right bottom, #3a7bd5, #3a6073);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
  }

  .card__front {
    padding: 18px;
  }

  .card__back {
    padding: 18px 0;
  }

  .card__black-line {
    margin-top: 5px;
    height: 38px;
    background-color: #303030;
  }

  .card__logo {
    height: 16px;
  }

  .card__front-logo {
    position: absolute;
    top: 18px;
    right: 18px;
  }
  .card__square {
    border-radius: 5px;
    height: 30px;
  }

  .card_number {
    display: block;
    width: 100%;
    word-spacing: 4px;
    font-size: 20px;
    letter-spacing: 2px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .card__space-75 {
    width: 75%;
    float: left;
  }

  .card__space-25 {
    width: 25%;
    float: left;
  }

  .card__label {
    font-size: 10px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 1px;
  }

  .card__info {
    margin-bottom: 0;
    margin-top: 5px;
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export default Card;
