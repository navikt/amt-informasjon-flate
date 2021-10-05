import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';

interface MainViewProps {
  showBackButton?: boolean;
}

const MainView: FunctionComponent<MainViewProps> = ({ showBackButton, children }) => {
  return (
    <Container>
      {showBackButton && (
        <Link to="/">
          <Tilbakeknapp />
        </Link>
      )}
      {children}
    </Container>
  );
};

export default MainView;
