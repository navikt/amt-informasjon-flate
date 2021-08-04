import React from 'react';
import Filtreringsoversikt from '../filtrering/Filtreringsoversikt';
import StedFilter from '../filtrering/StedFilter';
import TiltakOversikt from '../tiltaksoversikt/TiltakOversikt';
import './TiltakOgFilterOversikt.less';
import { Innholdstittel } from 'nav-frontend-typografi';
import Sokefelt from '../filtrering/Sokefelt';

const TiltakOgFilterOversikt = () => {
  return (
    <div className="tiltak_og_filter_grid">
      <Innholdstittel>
        <span>Muligheter</span>
      </Innholdstittel>
      <Sokefelt />
      <StedFilter />
      <Filtreringsoversikt />
      <TiltakOversikt />
    </div>
  );
};

export default TiltakOgFilterOversikt;
