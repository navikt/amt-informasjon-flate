import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TiltaksvariantDetaljer from './views/tiltaksvariant-detaljer/TiltaksvariantDetaljer';
import OpprettOgRedigerTiltaksvariant from './views/tiltaksvariant-redigering/OpprettOgRedigerTiltaksvariant';
import TiltaksvariantOversikt from './views/tiltaksvariant-oversikt/TiltaksvariantOversikt';
import TiltaksgjennomforingDetaljer from './views/tiltaksgjennomforing-detaljer/TiltaksgjennomforingDetaljer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/tiltaksvarianter/opprett" component={OpprettOgRedigerTiltaksvariant} />
      <Route exact path="/tiltaksvarianter/:id" component={TiltaksvariantDetaljer} />
      <Route exact path="/tiltaksvarianter/:id/rediger" component={OpprettOgRedigerTiltaksvariant} />
      <Route
        exact
        path="/tiltaksvarianter/:tiltaksvariantId/tiltaksgjennomforinger/:tiltaksgjennomforingsId"
        component={TiltaksgjennomforingDetaljer}
      />
      <Route path="/" component={TiltaksvariantOversikt} />
    </Switch>
  );
};

export default Routes;
