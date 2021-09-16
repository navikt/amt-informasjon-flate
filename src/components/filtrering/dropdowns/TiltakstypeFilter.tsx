import React from 'react';
import { useDispatch } from 'react-redux';
import '../Filtrering.less';
import { useQuery } from 'react-query';
import DropdownFilter from './DropdownFilter';
import { velgTiltakstype } from '../../../redux/slice/FiltreringSlice';

const TiltakstypeFilter = () => {
  const dispatch = useDispatch();

  const { isLoading, data, isSuccess, isError } = useQuery('tiltakstyper', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/typer').then(res => res.json())
  );

  return (
    <DropdownFilter
      data={data}
      onChange={filter => dispatch(velgTiltakstype(filter))}
      tittel="Tiltakstyper"
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
    />
  );
};

export default TiltakstypeFilter;
