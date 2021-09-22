import React from 'react';
import { useSelector } from 'react-redux';
import Tiltaksoversikt from '../tiltaksoversikt/Tiltaksoversikt';
import Sokefelt from '../filtrering/Sokefelt';
import { toggleBildeListeVisning } from '../../redux/slice/ToggleSlice';
import Toggle from '../toggle/Toggle';
import './TiltakOgFilterOversikt.less';

const TiltakOgFilterOversikt = () => {
  const bildeListeToggle = useSelector((state: any) => state.toggleReducer.bildeListeVisning);

  return (
    <div className="tiltak-og-filter__grid">
      <Sokefelt />
      <Toggle
        toggle={bildeListeToggle}
        onChange={toggleBildeListeVisning}
        venstreTekst="Bildevisning"
        hoyreTekst="Listevisning"
        className="bildelistevisning__toggle"
      />
      <Tiltaksoversikt />
    </div>
  );
};

export default TiltakOgFilterOversikt;
