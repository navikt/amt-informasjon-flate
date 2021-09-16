import React, { useState } from 'react';
import { Input } from 'nav-frontend-skjema';
import '../body/TiltakOgFilterOversikt.less';
import { useDispatch } from 'react-redux';
import { skrivSokefelt } from '../../redux/slice/FiltreringSlice';
import useDebounce from '../../hooks/useDebounce';

const Sokefelt = () => {
  const [sok, setSok] = useState('');
  const dispatch = useDispatch();

  useDebounce(() => dispatch(skrivSokefelt(sok)), 500, [sok]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSok(e.target.value);
  };

  return (
    <Input
      label="Søk etter mulighet:"
      className="sok-mulighet"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      value={sok}
    />
  );
};

export default Sokefelt;
