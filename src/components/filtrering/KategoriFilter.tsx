import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleKategoriFilter } from '../../redux/filtreringer/KategoriFilterSlice';
import DropdownFilter from './DropdownFilter';

//Dette må hentes et eller annet sted
const kategorier: Array<string> = ['Kartlegging', 'Kompetanseheving', 'Tilrettelegging'];

const KategoriFilter = () => {
  const dispatch = useDispatch();

  const oppdaterFiltere = (filter: string) => {
    dispatch(toggleKategoriFilter(filter));
  };

  return <DropdownFilter filtreringsmuligheter={kategorier} onChange={oppdaterFiltere} tittel="Kategori" />;
};

export default KategoriFilter;
