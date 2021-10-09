import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TiltakstypeDetaljer from './views/tiltakstype-detaljer/TiltakstypeDetaljer';
import OpprettOgRedigerTiltak from './views/tiltakstype-redigering/OpprettOgRedigerTiltak';
import TiltakstypeOversikt from './views/tiltakstype-oversikt/TiltakstypeOversikt';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/tiltakstyper/opprett" component={OpprettOgRedigerTiltak} />
      <Route exact path="/tiltakstyper/:id" component={TiltakstypeDetaljer} />
      <Route exact path="/tiltakstyper/:id/rediger" component={OpprettOgRedigerTiltak} />
      <Route path="/" component={TiltakstypeOversikt} />
    </Switch>
  );
};

export default Routes;
