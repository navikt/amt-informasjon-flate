import React from 'react';
import './Filtrering.less';
import KategoriFilter from './KategoriFilter';
import TiltakstypeFilter from './TiltakstypeFilter';

const Filtreringsoversikt = () => {
  return (
    <>
      <TiltakstypeFilter />
      <KategoriFilter />
    </>
  );
};

export default Filtreringsoversikt;
