import React from 'react';
import { ReactComponent as Logo } from '../../ikoner/MulighetsrommetLogo.svg';
import { Sidetittel, Undertittel } from 'nav-frontend-typografi';
import './Header.less';

const Header = () => {
  return (
    <div className="header__border">
      <div className="header">
        <Logo className="header__logo" />
        <Sidetittel className="header__tittel">Mulighetsrommet</Sidetittel>
        <Undertittel className="header__undertittel">NAV tilbyr et hav av muligheter</Undertittel>
      </div>
    </div>
  );
};

export default Header;
