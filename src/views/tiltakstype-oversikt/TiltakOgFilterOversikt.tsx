import React from 'react';
import Tiltaksoversikt from '../../components/tiltaksoversikt/Tiltaksoversikt';
import Sokefelt from '../../components/filtrering/Sokefelt';
import { Knapp } from 'nav-frontend-knapper';
import Lenke from 'nav-frontend-lenker';
import './TiltakOgFilterOversikt.less';

const TiltakOgFilterOversikt = () => {

  return (
    <div className="tiltak-og-filter__grid">
      <Sokefelt />

      <Lenke href="../admin/opprett-tiltakstype" className="opprett-nytt-tiltak__knapp">
        <Knapp>Opprett ny tiltakstype</Knapp>
      </Lenke>
      <Tiltaksoversikt />
    </div>
  );
};

export default TiltakOgFilterOversikt;
