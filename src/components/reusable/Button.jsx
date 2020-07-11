import React from 'react';
import styled from '@emotion/styled';

const Button = ({ title, action, color }) => {
  return (
    <Container onClick={action} color={color}>
      <LeftSide>
        <Card>
          <CardLine />
          <Buttons />
        </Card>
      </LeftSide>
      <RightSide>
        <New>{title}</New>
        <Arrow
          xmlns='http://www.w3.org/2000/svg'
          width='512'
          height='512'
          viewBox='0 0 451.846 451.847'
        >
          <path
            d='M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z'
            data-original='#000000'
            data-old_color='#000000'
            fill='#cfcfcf'
          />
        </Arrow>
      </RightSide>
    </Container>
  );
};

// Styles
const LeftSide = styled.div`
  width: 130px;
  height: 120px;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;
  overflow: hidden;
`;

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');

  background-color: #ffffff;
  display: flex;
  width: 460px;
  height: 120px;
  position: relative;
  border-radius: 6px;
  margin-top: 40px;

  ${LeftSide} {
    background-image: ${(props) => props.color};
  }
`;

const RightSide = styled.div`
  width: calc(100% - 130px);
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  white-space: nowrap;
  transition: 0.3s;
  &:hover {
    background-color: #f9f7f9;
  }
`;

const Card = styled.div`
  width: 70px;
  height: 46px;
  background-color: #33837e;
  border-radius: 6px;
  position: absolute;
  display: flex;
  z-index: 10;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  width: 8px;
  height: 8px;
  background-color: #379e1f;
  box-shadow: 0 -10px 0 0 #26850e, 0 10px 0 0 #56be3e;
  border-radius: 50%;
  transform: rotate(90deg);
  margin: 10px 0 0 -30px;
`;

const CardLine = styled.div`
  width: 65px;
  height: 13px;
  background-color: #80ea69;
  border-radius: 2px;
  margin-top: 7px;
`;

const Arrow = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

const New = styled.div`
  font-size: 23px;
  font-family: 'Lexend Deca', sans-serif;
  margin-left: 20px;
`;

export default Button;
