import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Buttons from './Buttons';
import CardInfo from './CardInfo';
import Loader from '../styles/Loader';

const CurrentCard = () => {
  let { id } = useParams();
  const cards = useSelector((state) => state.cards);

  // TODO cancel
  // // state request delete
  //
  // const navigate = useNavigate();
  //
  // useEffect(()=>{
  //   if (IF_GOOD_DELETE) navigate('..');
  // },[IF_GOOD_DELETE])

  // TODO добавить редирект
  return (
    <>
      {!cards.status ? (
        <Loader />
      ) : cards.data[id] ? (
        <Info>
          <CardInfo card={cards.data[id]} />
          <Buttons id={id} />
        </Info>
      ) : (
        <h1>No card</h1>
      )}
    </>
  );
};

const Info = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 40px;
`;

export default CurrentCard;
