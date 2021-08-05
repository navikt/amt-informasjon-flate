import React from 'react';
import { useDispatch } from 'react-redux';
import { hentInnsatsgruppeFilter } from '../../redux/filtreringer/InnsatsgruppeFilterSlice';
import DropdownFilter from './DropdownFilter';
import { Innsatsgruppe } from '../../data/Tiltakstyper';

const innsatsgrupper: Array<Innsatsgruppe> = [
  Innsatsgruppe.STANDARD,
  Innsatsgruppe.SITUASJONSBESTEMT,
  Innsatsgruppe.SPESIELT_TILPASSET,
  Innsatsgruppe.VARIG_TILPASSET,
];

const InnsatsgruppeFilter = () => {
  const dispatch = useDispatch();
  const oppdaterFiltere = (filter: string) => {
    dispatch(hentInnsatsgruppeFilter(filter));
  };

  return (
    <DropdownFilter
      filtreringsmuligheter={innsatsgrupper}
      onChange={oppdaterFiltere}
      tittel="Innsatsgrupper"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default InnsatsgruppeFilter;
