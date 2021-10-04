import { Route, Switch } from 'react-router-dom';
import TiltakstypeDetaljer from './views/tiltakstype-detaljer/Tiltaksvisning';
import OpprettOgRedigerTiltak from './views/tiltakstype-redigering/OpprettOgRedigerTiltak';
import TiltakOgFilterOversikt from './views/tiltakstype-oversikt/TiltakOgFilterOversikt';
import React from 'react';
import { Container } from 'react-bootstrap';

const Routes = () => {
  return (
    <div className="main-app">
      <Container>
        <Switch>
          <Route path="/tiltakstype/:id" component={TiltakstypeDetaljer} />
          <Route path="/admin/rediger-tiltakstype/:id" component={OpprettOgRedigerTiltak} />
          <Route path="/admin/opprett-tiltakstype" component={OpprettOgRedigerTiltak} />
          <Route path="/" component={TiltakOgFilterOversikt} />
        </Switch>
      </Container>
    </div>
  );
};

export default Routes;
