import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Decorator from './decorator/Decorator';
import './App.less';
import Header from './components/header/Header';
import ToppMeny from './components/toppMeny/ToppMeny';
import TiltakOgFilterOversikt from './components/visning/TiltakOgFilterOversikt';
import Tiltaksvisning from './components/tiltaksvisning/Tiltaksvisning';
import OpprettTiltak from './components/redigering/OpprettTiltak';

function App() {
  return (
    <Router>
      <Decorator />
      <Header />
      <div className="main-app">
        <Switch>
          <Route path="/tiltak/:id">
            <Tiltaksvisning />
          </Route>
          <Route path="/admin/opprett-tiltak">
            <OpprettTiltak />
          </Route>
          <Route path="/">
            <ToppMeny />
            <TiltakOgFilterOversikt />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
