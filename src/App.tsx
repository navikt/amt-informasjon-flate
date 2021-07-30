import React from 'react';
import Decorator from './decorator/Decorator';
import TiltakOversikt from './components/tiltaksoversikt/TiltakOversikt';
import './App.less';
import Filtreringsoversikt from './components/filtrering/Filtreringsoversikt';

function App() {
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

      <div className="main-app">
        <Filtreringsoversikt />
        <TiltakOversikt tiltaksliste={tiltaksliste} />
      </div>
    </>
  );
}

export default App;
