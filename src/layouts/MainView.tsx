import React, { FunctionComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import './MainView.less';
import { Sidetittel, Systemtittel } from 'nav-frontend-typografi';
import Link from '../components/link/Link';

interface MainViewProps {
  showBackButton?: boolean;
  title?: string;
  subTitle?: string;
}

const MainView: FunctionComponent<MainViewProps> = ({ showBackButton, title, subTitle, children }) => {
  return (
    <Container className="main-view">
      <Row className="main-view__header">
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
