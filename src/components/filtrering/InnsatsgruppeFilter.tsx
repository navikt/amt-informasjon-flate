import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleInnsatsgruppeFilter } from '../../redux/filtreringer/InnsatsgruppeFilterSlice';
import DropdownFilter from './DropdownFilter';

const innsatsgrupper: Array<string> = ['Standard', 'Situasjonsbestemt', 'Spesielt tilpasset', 'Varig tilpasset'];

const InnsatsgruppeFilter = () => {
  const dispatch = useDispatch();
  const oppdaterFiltere = (filter: string) => {
    dispatch(toggleInnsatsgruppeFilter(filter));
  };

  return (
    <DropdownFilter
      filtreringsmuligheter={innsatsgrupper}
      onChange={oppdaterFiltere}
      tittel="Innsatsgrupper"
      style={{ background: 'rgba(179, 193, 0, 0.4)' }}
    />
  );
};

export default InnsatsgruppeFilter;