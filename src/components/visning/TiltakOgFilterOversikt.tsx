import React from 'react';
import Filtreringsoversikt from '../filtrering/Filtreringsoversikt';
import StedFilter from '../filtrering/StedFilter';
import TiltakOversikt from '../tiltaksoversikt/TiltakOversikt';
import './TiltakOgFilterOversikt.less';

const TiltakOgFilterOversikt = () => {
  return (
    <div className="tiltak_og_filter_grid">
      <div className="omraade_filter">
        <StedFilter />
      </div>
      <div className="filtere">
        <Filtreringsoversikt />
      </div>
      <div className="tiltak">
        <TiltakOversikt />
      </div>
    </div>
  );
};

export default TiltakOgFilterOversikt;
