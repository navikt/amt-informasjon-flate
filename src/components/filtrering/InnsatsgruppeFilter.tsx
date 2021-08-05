import React from 'react';
import { useDispatch } from 'react-redux';
import { velgInnsatsgruppeFilter } from '../../redux/filtreringer/InnsatsgruppeFilterSlice';
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

  return (
    <DropdownFilter
      filtreringsmuligheter={innsatsgrupper}
      onChange={filter => dispatch(velgInnsatsgruppeFilter(filter))}
      tittel="Innsatsgrupper"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default InnsatsgruppeFilter;
