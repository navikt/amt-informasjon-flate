import { Route, Switch } from 'react-router-dom';
import Tiltaksvisning from './components/tiltaksvisning/Tiltaksvisning';
import OpprettOgRedigerTiltak from './components/redigering/OpprettOgRedigerTiltak';
import TiltakOgFilterOversikt from './components/body/TiltakOgFilterOversikt';
import React from 'react';

const Routes = () => {
  return (
    <div className="main-app">
      <Switch>
        <Route path="/tiltakstype/:id" component={Tiltaksvisning} />
        <Route path="/admin/rediger-tiltakstype/:id" component={OpprettOgRedigerTiltak} />
        <Route path="/admin/opprett-tiltakstype" component={OpprettOgRedigerTiltak} />
        <Route path="/" component={TiltakOgFilterOversikt} />
      </Switch>
    </div>
  );
};

export default Routes;
