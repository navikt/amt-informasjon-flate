import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Filtrering.less';
import DropdownFilter from './DropdownFilter';
import { velgTiltakstype } from '../../redux/slice/FiltreringSlice';

const TiltakstypeFilter = () => {
  const dispatch = useDispatch();
  const [tiltakstyper, setTiltakstyper] = useState<string[]>([]);

  //legg til i ApiService
  // useEffect(() => {
  //   hentAlleTiltakstyperFraDB(setTiltakstyper);
  // }, []);

  return (
    <DropdownFilter
      filtreringsmuligheter={tiltakstyper}
      onChange={filter => dispatch(velgTiltakstype(filter))}
      // onChange={filter => dispatch(velgTiltakstype(filter))}
      tittel="Tiltakstyper"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default TiltakstypeFilter;
