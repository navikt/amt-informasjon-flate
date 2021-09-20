import React from 'react';
import Tiltaksoversikt from '../tiltaksoversikt/Tiltaksoversikt';
import './TiltakOgFilterOversikt.less';
import Sokefelt from '../filtrering/Sokefelt';
import TiltakstypeFilter from '../filtrering/dropdowns/TiltakstypeFilter';
import { toggleBildeListeVisning } from '../../redux/slice/ToggleSlice';
import Toggle from '../toggle/Toggle';
import { useSelector } from 'react-redux';

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
      <TiltakstypeFilter />
      <Tiltaksoversikt />
    </div>
  );
};

export default TiltakOgFilterOversikt;
