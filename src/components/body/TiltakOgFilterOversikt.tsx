import React from 'react';
import Tiltaksoversikt from '../tiltaksoversikt/Tiltaksoversikt';
import './TiltakOgFilterOversikt.less';
import Sokefelt from '../filtrering/Sokefelt';
import BildeListeVisningsToggle from '../toggle/BildeListeVisningsToggle';
import TiltakstypeFilter from '../filtrering/dropdowns/TiltakstypeFilter';

const TiltakOgFilterOversikt = () => {
  return (
    <div className="tiltak-og-filter__grid">
      <Sokefelt />
      <BildeListeVisningsToggle />
      <TiltakstypeFilter />
      <Tiltaksoversikt />
    </div>
  );
};

export default TiltakOgFilterOversikt;
