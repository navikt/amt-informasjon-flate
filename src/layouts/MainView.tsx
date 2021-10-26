import React, { FunctionComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import './MainView.less';
import Link from '../components/link/Link';
import MainViewTitle from './MainViewTitle';

interface MainViewProps {
  showBackButton?: boolean;
  title?: string;
  subTitle?: string;
  dataTestId?: string;
}

const MainView: FunctionComponent<MainViewProps> = ({ showBackButton, title, subTitle, dataTestId, children }) => {
  const renderTitleSection = () =>
    title ? <MainViewTitle title={title} subTitle={subTitle} dataTestId={dataTestId} /> : null;
  return (
    <Container className="main-view">
      <Row className="main-view__header">
        {showBackButton && (
          <Link to="/">
            <Tilbakeknapp data-testid="tilbakeknapp" />
          </Link>
        )}
      </Row>
      {renderTitleSection()}
      {children}
    </Container>
  );
};

export default MainView;
