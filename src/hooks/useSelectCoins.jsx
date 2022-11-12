import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato';
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

const useSelectCoins = (label, coinsOptions) => {
  const [state, setState] = useState('');

  const SelectCoins = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value=''>Select Coin</option>
        {coinsOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectCoins];
};

export default useSelectCoins;
