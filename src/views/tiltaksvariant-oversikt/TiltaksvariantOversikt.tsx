import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Tiltaksvariantoversikt from '../../components/tiltaksvariantoversikt/Tiltaksvariantoversikt';
import Sokefelt from '../../components/filtrering/Sokefelt';
import './TiltaksvariantOversikt.less';
import MainView from '../../layouts/MainView';
import Link from '../../components/link/Link';
import useTiltaksvarianter from '../../hooks/tiltaksvariant/useTiltaksvarianter';
import NavFrontendSpinner from 'nav-frontend-spinner';

const TiltaksvariantOversikt = () => {
  const { data, isFetching } = useTiltaksvarianter();
  return (
    <MainView
      title="Tiltaksvarianter"
      subTitle="Se en oversikt over alle nasjonale tiltaksvarianter"
      dataTestId="header-tiltaksvarianter"
    >
      <Row className="tiltaksvarianter-oversikt-actions">
        <Col lg={4}>
          <Sokefelt />
        </Col>
        <Col className="opprett-ny-tiltaksvariant__knapp__wrapper">
          <Link to="/tiltaksvarianter/opprett" className="knapp" dataTestId="knapp_opprett-tiltaksvariant">
            Opprett tiltaksvariant
          </Link>
        </Col>
      </Row>
      <Row>{isFetching ? <NavFrontendSpinner /> : <Tiltaksvariantoversikt tiltaksvarianter={data} />}</Row>
    </MainView>
  );
};

export default TiltaksvariantOversikt;
