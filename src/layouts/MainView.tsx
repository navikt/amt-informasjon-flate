import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';

interface MainViewProps {
  isTilbakeknapp?: boolean;
}

const MainView: FunctionComponent<MainViewProps> = ({ isTilbakeknapp, children }) => {
  const history = useHistory();
  return (
    <Container>
      {isTilbakeknapp && <Tilbakeknapp onClick={() => history.goBack()} />}
      {children}
    </Container>
  );
};

export default MainView;
