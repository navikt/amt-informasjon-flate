import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTiltakstypeFilter } from '../../redux/filtreringer/TiltakstypeFilterSlice';
import './Filtrering.less';
import DropdownFilter from './DropdownFilter';

//TODO hente dette fra et sted
const tiltakstyper: Array<string> = ['Avklaring', 'Oppfølging', 'Arbeidsmarkedsopplæring'];

const TiltakstypeFilter = () => {
  const dispatch = useDispatch();

  const oppdaterFiltere = (filter: string) => {
    dispatch(toggleTiltakstypeFilter(filter));
  };

  return (
    <DropdownFilter
      filtreringsmuligheter={tiltakstyper}
      onChange={oppdaterFiltere}
      tittel="Tiltakstyper"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default TiltakstypeFilter;
