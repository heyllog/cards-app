import React from 'react';
import styled from '@emotion/styled';

const LoaderStyle = styled.div`
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 10px;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #03a9f4;
    border-color: #03a9f4 transparent #03a9f4 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderStyle>
      <div className='lds-dual-ring' />
    </LoaderStyle>
  );
};

export default Loader;
