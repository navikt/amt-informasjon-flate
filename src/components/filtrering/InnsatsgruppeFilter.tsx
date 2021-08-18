import React from 'react';
import { useDispatch } from 'react-redux';
import {Innsatsgruppe} from '../../domain/domain';
import DropdownFilter from './DropdownFilter';
import { velgInnsatsgruppe } from '../../redux/filtreringer/FiltreringSlice';

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
      onChange={filter => dispatch(velgInnsatsgruppe(filter))}
      tittel="Innsatsgrupper"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default InnsatsgruppeFilter;
