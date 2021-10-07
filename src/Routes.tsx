import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TiltakstypeDetaljer from './views/tiltakstype-detaljer/Tiltaksvisning';
import OpprettOgRedigerTiltak from './views/tiltakstype-redigering/OpprettOgRedigerTiltak';
import TiltakstypeOversikt from './views/tiltakstype-oversikt/TiltakstypeOversikt';

const Routes = () => {
  return (
    <Switch>
      <Route path="/tiltakstype/:id" component={TiltakstypeDetaljer} />
      <Route path="/admin/rediger-tiltakstype/:id" component={OpprettOgRedigerTiltak} />
      <Route path="/admin/opprett-tiltakstype" component={OpprettOgRedigerTiltak} />
      <Route path="/" component={TiltakstypeOversikt} />
    </Switch>
  );
};

export default Routes;
