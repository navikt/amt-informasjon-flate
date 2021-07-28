import React from 'react';
import Decorator from './decorator/Decorator';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Decorator />
      <div className="main-app">
        <Header />
      </div>
    </>
  );
}

export default App;
