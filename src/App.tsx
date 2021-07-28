import React from 'react';
import Decorator from './decorator/decorator';
import TiltakOversikt from './components/tiltaksoversikt/TiltakOversikt';
import './App.less';

function App() {
  const tiltaksliste = [
    { id: 1, tittel: 'Tittel1', beskrivelse: 'Lorem Ipsum dolor sit amet' },
    { id: 2, tittel: 'Tittel2', beskrivelse: 'Lorem Ipsum dolor sit amet' },
  ];

  return (
    <>
      <Decorator />
      <TiltakOversikt tiltaksliste={tiltaksliste} />
    </>
  );
}

export default App;
