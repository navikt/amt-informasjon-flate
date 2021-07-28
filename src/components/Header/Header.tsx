import React from 'react';
import { ReactComponent as Logo } from '../../ikoner/MulighetsrommetLogo.svg';
import { Systemtittel, Undertittel } from 'nav-frontend-typografi';

const Header = () => {
  return (
    <div className="overskrift">
      <Logo />
      <Systemtittel>Mulighetsrommet</Systemtittel>
      <Undertittel>NAV tilbyr et hav av muligheter</Undertittel>
    </div>
  );
};

export default Header;
