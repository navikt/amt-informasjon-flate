import React from 'react';
import Decorator from './decorator/Decorator';
import Header from './components/Header/Header';
import './App.less';
import Filtreringsoversikt from './components/filtrering/Filtreringsoversikt';
import VeilederVisning from './components/VeilederVisning/VeilederVisning';
import BrukerVisning from './components/BrukerVisning/BrukerVisning';
import { useSelector } from 'react-redux';
import TiltakOversikt from './components/tiltaksoversikt/TiltakOversikt';
import ToggleController from './components/Toggle/ToggleController';

function App() {
  const veilederToggle = useSelector((state: any) => state.visningsToggle.veiledervisning);

  //TODO fjern når vi får koblet til backend
  const tiltaksliste = [
    { id: 1, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 2, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim.' },
    { id: 4, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 5, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 6, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <>
      <Decorator />
      <Header />
      <div className="main-app">
        <ToggleController />
        {veilederToggle === true ? <VeilederVisning /> : <BrukerVisning />}

        <Filtreringsoversikt />
        <TiltakOversikt tiltaksliste={tiltaksliste} />
      </div>
    </>
  );
}

export default App;
