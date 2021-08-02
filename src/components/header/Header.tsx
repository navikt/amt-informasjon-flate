import React from 'react';
import { ReactComponent as Logo } from '../../ikoner/MulighetsrommetLogo.svg';
import { Sidetittel, Undertittel } from 'nav-frontend-typografi';
import './Header.less';

const Header = () => {
  return (
    <div className="header-border">
      <div className="header">
        <Logo className="header_logo" />
        <Sidetittel className="header_tittel">Mulighetsrommet</Sidetittel>
        <Undertittel className="header_undertittel">NAV tilbyr et hav av muligheter</Undertittel>
      </div>
    </div>
  );
};

export default Header;
