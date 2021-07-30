import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../redux/filtreringer/TiltakstypeFilterSlice';
import './Filtrering.less';
import DropDownFilter from './DropdownFilter';

//TODO hente dette fra et sted
const tiltakstyper: Array<string> = ['Avklaring', 'Oppfølging', 'Arbeidsmarkedsopplæring'];

const TiltakstypeFilter = () => {
  const dispatch = useDispatch();

  const oppdaterFiltere = (filter: string) => {
    dispatch(toggleFilter(filter));
  };

  return <DropDownFilter filtreringsmuligheter={tiltakstyper} onChange={oppdaterFiltere} tittel="Tiltakstyper" />;
};

export default TiltakstypeFilter;
