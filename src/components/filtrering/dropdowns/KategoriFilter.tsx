import React from 'react';
import { useDispatch } from 'react-redux';
import DropdownFilter from './DropdownFilter';
import { velgKategori } from '../../../redux/slice/FiltreringSlice';
import { useQuery } from 'react-query';

const KategoriFilter = () => {
  const dispatch = useDispatch();

  const { isLoading, data } = useQuery('kategorier', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/kategorier').then(res => res.json())
  );

  return (
    <DropdownFilter
      data={data}
      onChange={filter => dispatch(velgKategori(filter))}
      tittel="Kategori"
      isLoading={isLoading}
    />
  );
};

export default KategoriFilter;
