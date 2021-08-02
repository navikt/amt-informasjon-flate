import ToggleController from '../toggle/ToggleController';
import React from 'react';
import Visningsmodus from './Visningsmodus';
import './ToppMeny.less';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';

function ToppMeny() {
  return (
    <div className="topp-meny">
      <ToggleController />
      <Visningsmodus />
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
