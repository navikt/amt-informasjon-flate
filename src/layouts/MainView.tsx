import React, { FunctionComponent } from 'react';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import './MainView.less';
import Link from '../components/link/Link';
import MainViewTitle from './MainViewTitle';
import { Container, Row } from 'react-bootstrap';

interface MainViewProps {
  showBackButton?: boolean;
  title?: string;
  subTitle?: string;
  dataTestId?: string;
  tilbakelenke?: string;
}

const MainView: FunctionComponent<MainViewProps> = ({
  showBackButton,
  title,
  subTitle,
  dataTestId,
  tilbakelenke = '/',
  children,
}) => {
  return (
    <Container className="main-view">
      <Row className="main-view__header">
        {showBackButton && (
          <Link to={tilbakelenke}>
            <Tilbakeknapp data-testid="tilbakeknapp" />
          </Link>
        )}
      </Row>
      {title && <MainViewTitle title={title} subTitle={subTitle} dataTestId={dataTestId} />}
      {children}
    </Container>
  );
};

export default MainView;
