//imports
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectCoins from '../hooks/useSelectCoins';
import { coins } from '../data/coins';

//Styles components
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = ({ setCoins }) => {
  const [cripto, setCripto] = useState([]);
  const [error, setError] = useState(false);

  const [coin, SelectCoins] = useSelectCoins('Choose your coin', coins);
  const [criptoCoin, SelectCriptoCoin] = useSelectCoins(
    'Choose your Cripto',
    cripto
  );

  useEffect(() => {
    const callAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD';
      const response = await fetch(url);
      const result = await response.json();

      const arrayCripto = result.Data.map((cripto) => {
        const objet = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objet;
      });
      setCripto(arrayCripto);
    };
    callAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([coin, criptoCoin].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    setCoins({
      coin,
      criptoCoin,
    });
  };

  return (
    <>
      {error && <Error>All fields are required</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCriptoCoin />
        {/* {coin} */}
        <InputSubmit type='submit' value='Quote now' />
      </form>
    </>
  );
};

export default Form;
