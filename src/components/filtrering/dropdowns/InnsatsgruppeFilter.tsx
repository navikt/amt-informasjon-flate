import React from 'react';
import { useDispatch } from 'react-redux';
import DropdownFilter from './DropdownFilter';
import { Innsatsgruppe } from '../../../data/Tiltakstyper';
import { velgInnsatsgruppe } from '../../../redux/slice/FiltreringSlice';
import { useQuery } from 'react-query';

const innsatsgrupper: Array<Innsatsgruppe> = [
  Innsatsgruppe.STANDARD,
  Innsatsgruppe.SITUASJONSBESTEMT,
  Innsatsgruppe.SPESIELT_TILPASSET,
  Innsatsgruppe.VARIG_TILPASSET,
];

const InnsatsgruppeFilter = () => {
  const dispatch = useDispatch();

  const { isLoading, data } = useQuery('innsatsgrupper', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/innsatsgrupper').then(res => res.json())
  );

  return (
    <DropdownFilter
      //bytt denne når innsatsgrupper er i databasen
      // data={innsatsgrupper}
      data={data}
      onChange={filter => dispatch(velgInnsatsgruppe(filter))}
      tittel="Innsatsgrupper"
      isLoading={isLoading}
    />
  );
};

export default InnsatsgruppeFilter;
