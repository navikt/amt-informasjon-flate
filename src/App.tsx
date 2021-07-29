import React from 'react';
import Decorator from './decorator/Decorator';
import Header from './components/Header/Header';
import './App.less';
import DarkModeToggle from './components/Toggle/VeilederBrukerToggle';

function App() {
  return (
    <>
      <Decorator />
      <div className="main-app">
        <Header />
        <DarkModeToggle />
      </div>
    </>
  );
}

export default App;
