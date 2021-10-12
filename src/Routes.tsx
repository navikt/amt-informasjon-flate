import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TiltakstypeDetaljer from './views/tiltakstype-detaljer/TiltakstypeDetaljer';
import OpprettOgRedigerTiltakstype from './views/tiltakstype-redigering/OpprettOgRedigerTiltakstype';
import TiltakstypeOversikt from './views/tiltakstype-oversikt/TiltakstypeOversikt';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/tiltakstyper/opprett" component={OpprettOgRedigerTiltakstype} />
      <Route exact path="/tiltakstyper/:id" component={TiltakstypeDetaljer} />
      <Route exact path="/tiltakstyper/:id/rediger" component={OpprettOgRedigerTiltakstype} />
      <Route path="/" component={TiltakstypeOversikt} />
    </Switch>
  );
};

export default Routes;
