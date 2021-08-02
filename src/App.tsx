import React from 'react';
import Decorator from './decorator/Decorator';
import './App.less';
import TiltakOversikt from './components/tiltaksoversikt/TiltakOversikt';
import Header from './components/header/Header';
import ToppMeny from './components/toppMeny/ToppMeny';

function App() {
  //TODO fjern når vi får koblet til backend
  const tiltaksliste = [
    { id: 1, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 2, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim.' },
    { id: 4, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 5, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    {
      id: 6,
      tittel: 'Tittel',
      ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <>
      <Decorator />
      <Header />
      <div className="main-app">
        <ToppMeny />
        <TiltakOversikt tiltaksliste={tiltaksliste} />
      </div>
    </>
  );
}

export default App;
