import React from 'react';
import Decorator from './decorator/Decorator';
import Header from './components/Header/Header';
import './App.less';
import VeilederVisning from './components/VeilederVisning/VeilederVisning';
import BrukerVisning from './components/BrukerVisning/BrukerVisning';
import { useSelector } from 'react-redux';
import ToggleController from './components/Toggle/ToggleController';
import TiltakOgFilterOversikt from './components/visning/TiltakOgFilterOversikt';

function App() {
  const veilederToggle = useSelector((state: any) => state.visningsToggle.veiledervisning);

  return (
    <>
      <Decorator />
      <Header />
      <div className="main-app">
        <ToggleController />
        {veilederToggle === true ? <VeilederVisning /> : <BrukerVisning />}
        <TiltakOgFilterOversikt />
      </div>
    </>
  );
}

export default App;
