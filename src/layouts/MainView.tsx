import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import './MainView.less';
import { Innholdstittel, Sidetittel, Systemtittel } from 'nav-frontend-typografi';

interface MainViewProps {
  showBackButton?: boolean;
  title?: string;
  subTitle?: string;
}

const MainView: FunctionComponent<MainViewProps> = ({ showBackButton, title, subTitle, children }) => {
  return (
    <Container className="main-view">
      <Row>
        {showBackButton && (
          <Link to="/">
            <Tilbakeknapp />
          </Link>
        )}
      </Row>
      <Row className="main-view__title">
        {title && <Sidetittel>{title}</Sidetittel>}
        {subTitle && <Systemtittel>{subTitle}</Systemtittel>}
      </Row>
      {children}
    </Container>
  );
};

export default MainView;
