import React from 'react';
import { useDispatch } from 'react-redux';
import { hentKategoriFilter } from '../../redux/filtreringer/KategoriFilterSlice';
import DropdownFilter from './DropdownFilter';
import { Kategori } from '../../data/Tiltakstyper';

//Dette må hentes et eller annet sted
const kategorier: Array<Kategori> = [Kategori.KARTLEGGING, Kategori.KOMPETANSEHEVING, Kategori.TILRETTELEGGING];

const KategoriFilter = () => {
  const dispatch = useDispatch();

  const oppdaterFiltere = (filter: string) => {
    dispatch(hentKategoriFilter(filter));
  };

  return (
    <DropdownFilter
      filtreringsmuligheter={kategorier}
      onChange={oppdaterFiltere}
      tittel="Kategori"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default KategoriFilter;
