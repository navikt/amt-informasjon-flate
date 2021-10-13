import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Tiltakstypeoversikt from '../../components/tiltakstypeoversikt/Tiltakstypeoversikt';
import Sokefelt from '../../components/filtrering/Sokefelt';
import './TiltakstypeOversikt.less';
import MainView from '../../layouts/MainView';
import Link from '../../components/link/Link';
import useTiltakstyper from '../../hooks/tiltakstyper/useTiltakstyper';
import NavFrontendSpinner from 'nav-frontend-spinner';

const TiltakstypeOversikt = () => {
  const { data, isFetching } = useTiltakstyper();
  return (
    <MainView
      title="Tiltakstyper"
      subTitle="Se en oversikt over alle nasjonale tiltakstyper"
      dataTestId="header-tiltakstyper"
    >
      <Row className="tiltakstyper-oversikt-actions">
        <Col lg={4}>
          <Sokefelt />
        </Col>
        <Col className="opprett-ny-tiltakstype__knapp__wrapper">
          <Link to="/tiltakstyper/opprett" className="knapp" dataTestId="knapp_opprett-tiltakstype">
            Opprett tiltakstype
          </Link>
        </Col>
      </Row>
      <Row>{isFetching ? <NavFrontendSpinner /> : <Tiltakstypeoversikt tiltakstyper={data} />}</Row>
    </MainView>
  );
};

export default TiltakstypeOversikt;
