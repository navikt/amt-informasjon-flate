import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';

interface MainViewProps {
  isTilbakeknapp?: boolean;
}

const MainView: FunctionComponent<MainViewProps> = ({ isTilbakeknapp, children }) => {
  return (
    <Container>
      {isTilbakeknapp && (
        <Link to="/">
          <Tilbakeknapp />
        </Link>
      )}
      {children}
    </Container>
  );
};

export default MainView;
