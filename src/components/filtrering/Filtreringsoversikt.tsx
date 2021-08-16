import React from 'react';
import './Filtrering.less';
import InnsatsgruppeFilter from './dropdowns/InnsatsgruppeFilter';
import KategoriFilter from './dropdowns/KategoriFilter';
import TiltakstypeFilter from './dropdowns/TiltakstypeFilter';

const Filtreringsoversikt = () => {
  return (
    <div className="filter__wrapper">
      <KategoriFilter />
      <TiltakstypeFilter />
      <InnsatsgruppeFilter />
    </div>
  );
};

export default Filtreringsoversikt;
