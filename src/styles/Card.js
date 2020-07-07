import styled from '@emotion/styled';

const Card = styled.div`
  width: 320px;
  height: 200px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  //background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  //background: linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
  //background: linear-gradient(90deg, #11998e 0%, #2bbf63 100%);
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);

  //background-color: #64DC9C;
  //background-color: #36837e;
  box-shadow: 4px 4px 8px 5px rgba(34, 60, 80, 0.2);

  &:hover {
    transform: scale(1.02);
  }

  .number {
    text-align: center;
    margin-top: 25px;
    padding: 10px;
    font-size: 24px;
    font-weight: 600;
    background-color: #2ecc71;
    border-radius: 10px;
  }

  .balance {
    margin-top: 40px;
    padding: 10px;
    float: right;
    background-color: #2ecc71;
    border-radius: 10px;
  }
`;

export default Card;
