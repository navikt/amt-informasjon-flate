import React from 'react';
import './Filtrering.less';
import InnsatsgruppeFilter from './InnsatsgruppeFilter';
import KategoriFilter from './KategoriFilter';
import StedFilter from './StedFilter';
import TiltakstypeFilter from './TiltakstypeFilter';

const Filtreringsoversikt = () => {
  return (
    <>
      <StedFilter />
      <div className="dropdownFilterContainer">
        <KategoriFilter />
        <TiltakstypeFilter />
        <InnsatsgruppeFilter />
      </div>
    </>
  );
};

export default Filtreringsoversikt;
