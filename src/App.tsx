import React from 'react';
import Decorator from './decorator/Decorator';
import './App.less';
import Header from './components/header/Header';
import ToppMeny from './components/toppMeny/ToppMeny';
import TiltakOgFilterOversikt from './components/visning/TiltakOgFilterOversikt';

function App() {
  return (
    <>
      <Decorator />
      <Header />
      <div className="main-app">
        <ToppMeny />
        <TiltakOgFilterOversikt />
      </div>
    </>
  );
}

export default App;
