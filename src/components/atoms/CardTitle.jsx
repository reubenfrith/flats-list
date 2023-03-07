import styled from 'styled-components';

const Title = styled.h2`
  color: white;
  text-wrap: wrap;
  overflow-wrap: break-word;
  hyphens: manual;
  margin: 0;
  padding: 0;
`;

const CardTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default CardTitle;
