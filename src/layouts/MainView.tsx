import React, { useEffect, useLayoutEffect, useState, FunctionComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import './MainView.less';
import Link from '../components/link/Link';
import MainViewTitle from './MainViewTitle';

interface MainViewProps {
  showBackButton?: boolean;
  title?: string;
  subTitle?: string;
}

const MainView: FunctionComponent<MainViewProps> = ({ showBackButton, title, subTitle, children }) => {
  const renderTitleSection = () => (title ? <MainViewTitle title={title} subTitle={subTitle} /> : null);
  return (
    <Container className="main-view">
      <Row className="main-view__header">
        {showBackButton && (
          <Link to="/">
            <Tilbakeknapp />
          </Link>
        )}
      </Row>
      {renderTitleSection()}
      {children}
    </Container>
  );
};

export default MainView;
