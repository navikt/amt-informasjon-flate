import React from 'react';
import { useDispatch } from 'react-redux';
import DropdownFilter from './DropdownFilter';
import { velgInnsatsgruppe } from '../../../redux/slice/FiltreringSlice';
import { useQuery } from 'react-query';
import { Innsatsgruppe } from '../../../domain/Domain';

const innsatsgrupper: Array<Innsatsgruppe> = [
  Innsatsgruppe.STANDARD,
  Innsatsgruppe.SITUASJONSBESTEMT,
  Innsatsgruppe.SPESIELT_TILPASSET,
  Innsatsgruppe.VARIG_TILPASSET,
];

const InnsatsgruppeFilter = () => {
  const dispatch = useDispatch();

  //TODO legg til data her når innsatsgrupper er i databasen
  const { isLoading, error } = useQuery('innsatsgrupper', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/innsatsgrupper').then(res => res.json())
  );

  return (
    <DropdownFilter
      data={innsatsgrupper}
      // data={data}
      onChange={filter => dispatch(velgInnsatsgruppe(filter))}
      tittel="Innsatsgrupper"
      isLoading={isLoading}
      error={error}
    />
  );
};

export default InnsatsgruppeFilter;
