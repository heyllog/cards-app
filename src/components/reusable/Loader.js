import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  margin: auto;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #03a9f4;
    border-color: #03a9f4 transparent #03a9f4 transparent;
    animation: ${Animation} 1.2s linear infinite;
  }
`;

export default Loader;
