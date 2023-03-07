import styled from 'styled-components';

const Dot = styled.div`
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
`;

const Marker = () => {
  return <Dot />;
};

export default Marker;
