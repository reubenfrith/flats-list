import styled from 'styled-components';

const WhiteText = styled.p`
  color: white;
  text-wrap: wrap;
  overflow-wrap: break-word;
  hyphens: manual;
  margin: 0;
  padding: 0;
`;

const Price = ({ price, currency }) => {
  return (
    <WhiteText>
      {price} {currency}
    </WhiteText>
  );
};

export default Price;
