import styled from '@emotion/styled';

const Status = styled.span`
  color: ${({ online }) => (online ? 'green' : 'red')};
`;

export default Status;
