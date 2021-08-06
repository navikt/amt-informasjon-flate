import React from 'react';
import { useDispatch } from 'react-redux';
import DropdownFilter from './DropdownFilter';
import { Kategori } from '../../data/Tiltakstyper';
import { velgKategoriFilter } from '../../redux/filtreringer/FiltreringSlice';

//TODO Dette må hentes et eller annet sted
const kategorier: Array<Kategori> = [Kategori.KARTLEGGING, Kategori.KOMPETANSEHEVING, Kategori.TILRETTELEGGING];

const KategoriFilter = () => {
  const dispatch = useDispatch();

  return (
    <DropdownFilter
      filtreringsmuligheter={kategorier}
      onChange={filter => dispatch(velgKategoriFilter(filter))}
      tittel="Kategori"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default KategoriFilter;
