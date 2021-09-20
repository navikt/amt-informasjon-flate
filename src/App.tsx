import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Decorator from './decorator/Decorator';
import './App.less';
import Header from './components/header/Header';
import TiltakOgFilterOversikt from './components/body/TiltakOgFilterOversikt';
import Tiltaksvisning from './components/tiltaksvisning/Tiltaksvisning';
import OpprettTiltak from './components/redigering/OpprettTiltak';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
              <TiltakOgFilterOversikt />
            </Route>
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
