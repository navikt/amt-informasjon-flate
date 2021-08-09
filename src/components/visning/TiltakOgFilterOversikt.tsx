import React from 'react';
import Filtreringsoversikt from '../filtrering/Filtreringsoversikt';
import StedFilter from '../filtrering/StedFilter';
import Tiltaksoversikt from '../tiltaksoversikt/Tiltaksoversikt';
import './TiltakOgFilterOversikt.less';
import { Innholdstittel } from 'nav-frontend-typografi';
import Sokefelt from '../filtrering/Sokefelt';
import BildeListeVisningsToggle from '../toggle/BildeListeVisningsToggle';

const TiltakOgFilterOversikt = () => {
  return (
    <div className="tiltak-og-filter__grid">
      <Innholdstittel>
        <span>Muligheter</span>
      </Innholdstittel>
      <BildeListeVisningsToggle />
      <Sokefelt />
      <StedFilter />
      <Filtreringsoversikt />
      <Tiltaksoversikt />
    </div>
  );
};

export default TiltakOgFilterOversikt;
