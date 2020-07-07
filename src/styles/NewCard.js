import styled from '@emotion/styled';

const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 200px;
  margin: 20px auto;
  padding: 5px;
  border-radius: 10px;
  background-image: linear-gradient(315deg, rgba(126,232,250,0.5) 0%, rgba(128,255,114,0.5) 74%);
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  
  .open-btn {
    width: 60px;
    height: 60px;
    margin: auto;
    border: none;
    background-color: rgba(255,255,255, 0);
    color: white;
    font-size: 2rem;
  }
  
  .close-btn {
    border-radius: 50%;
  }
`;

export default NewCard;
