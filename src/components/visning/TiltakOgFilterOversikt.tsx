import React from 'react';
import Filtreringsoversikt from '../filtrering/Filtreringsoversikt';
import StedFilter from '../filtrering/StedFilter';
import Tiltaksvisning from '../tiltaksoversikt/Tiltaksvisning';
import './TiltakOgFilterOversikt.less';
import { Innholdstittel } from 'nav-frontend-typografi';
import Sokefelt from '../filtrering/Sokefelt';
import BildeListeVisningsToggle from '../toggle/BildeListeVisningsToggle';

const TiltakOgFilterOversikt = () => {
  return (
    <div className="tiltak_og_filter_grid">
      <Innholdstittel>
        <span>Muligheter</span>
      </Innholdstittel>
      <BildeListeVisningsToggle />
      <Sokefelt />
      <StedFilter />
      <Filtreringsoversikt />
      <Tiltaksvisning />
    </div>
  );
};

export default TiltakOgFilterOversikt;
