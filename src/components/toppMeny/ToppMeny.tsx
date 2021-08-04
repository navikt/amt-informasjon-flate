import BrukerVisningsToggle from '../toggle/BrukerVisningsToggle';
import React from 'react';
import './ToppMeny.less';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import AlertStripe from 'nav-frontend-alertstriper';
import { useSelector } from 'react-redux';

function ToppMeny() {
  const veilederToggle = useSelector((state: any) => state.brukerVisningsReducer.brukerVisning);

  return (
    <div className="topp-meny">
      {veilederToggle === false && (
        <AlertStripe type="info" className="visningsmodus">
          Brukervisning
        </AlertStripe>
      )}
      <BrukerVisningsToggle />
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
