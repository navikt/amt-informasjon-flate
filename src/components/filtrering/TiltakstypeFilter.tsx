import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Filtrering.less';
import DropdownFilter from './DropdownFilter';
import { velgTiltakstype } from '../../redux/filtreringer/FiltreringSlice';

const TiltakstypeFilter = () => {
  const dispatch = useDispatch();
  const [tiltakstyper, setTiltakstyper] = useState<string[]>([]);

  const hentAlleTiltakstyperFraDB = (setTiltakstyper: (value: []) => void) => {
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/typer')
      .then(res => res.json())
      .then(data => setTiltakstyper(data));
  };

  useEffect(() => {
    hentAlleTiltakstyperFraDB(setTiltakstyper);
  }, []);

  return (
    <DropdownFilter
      filtreringsmuligheter={tiltakstyper}
      onChange={filter => dispatch(velgTiltakstype(filter))}
      tittel="Tiltakstyper"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default TiltakstypeFilter;
