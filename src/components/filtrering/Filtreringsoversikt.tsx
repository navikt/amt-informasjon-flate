import React from 'react';
import './Filtrering.less';
import InnsatsgruppeFilter from './InnsatsgruppeFilter';
import KategoriFilter from './KategoriFilter';
import TiltakstypeFilter from './TiltakstypeFilter';

const Filtreringsoversikt = () => {
  return (
    <div className="filter-wrapper">
      <KategoriFilter />
      <TiltakstypeFilter />
      <InnsatsgruppeFilter />
    </div>
  );
};

export default Filtreringsoversikt;
