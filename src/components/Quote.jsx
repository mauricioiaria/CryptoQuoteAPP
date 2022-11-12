import styled from '@emotion/styled';

const Contenedor = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 30px;
`;

const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Image = styled.img`
  display: block;
  width: 120px;
`;

const TextPrice = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Quote = ({ quote }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    quote;
  return (
    <Contenedor>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='cripto image' />
      <div>
        <TextPrice>
          Price: <span>{PRICE} </span>
        </TextPrice>
        <Text>
          Highest price of the day: <span>{HIGHDAY} </span>
        </Text>
        <Text>
          Lowest price of the day: <span>{LOWDAY} </span>
        </Text>
        <Text>
          Variation last 24 hours: <span>{CHANGEPCT24HOUR} </span>
        </Text>
        <Text>
          Last update: <span>{LASTUPDATE} </span>
        </Text>
      </div>
    </Contenedor>
  );
};

export default Quote;
