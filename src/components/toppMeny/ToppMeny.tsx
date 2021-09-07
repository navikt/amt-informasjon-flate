import BrukerVisningsToggle from '../toggle/BrukerVisningsToggle';
import React from 'react';
import './ToppMeny.less';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import AlertStripe from 'nav-frontend-alertstriper';
import { useSelector } from 'react-redux';

function ToppMeny() {
  const brukervisningsToggle = useSelector((state: any) => state.toggleReducer.brukerVisning);

  return (
    <div className="topp-meny">
      {brukervisningsToggle === false && (
        <AlertStripe type="info" className="alertstripe__brukervisning">
          Brukervisning
        </AlertStripe>
      )}
      <BrukerVisningsToggle className="forside__brukervisningstoggle info__brukervisningstoggle" />
      <div className="om-mulighetsrommet">
        <Ekspanderbartpanel tittel="Om mulighetsrommet">
          Mulighetsrommet lar deg se tiltak som kan gjøre det mulig for deg å få eller beholde arbeid. Tiltakene du
          deler sendes direkte til dialogen mellom deg og veileder.
        </Ekspanderbartpanel>
      </div>
    </div>
  );
}

export default ToppMeny;
