import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Tiltaksoversikt from '../../components/tiltaksoversikt/Tiltaksoversikt';
import Sokefelt from '../../components/filtrering/Sokefelt';
import './TiltakstypeOversikt.less';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import { Tiltakstype } from '../../core/domain/Tiltakstype';
import MainView from '../../layouts/MainView';
import Link from '../../components/link/Link';

const TiltakstypeOversikt = () => {
  const { data } = useQuery<Tiltakstype[]>(QueryKeys.Tiltakstyper, TiltakstypeService.getAllTiltakstyper);
  return (
    <MainView title="Tiltakstyper" subTitle="Se en oversikt over alle nasjonale tiltakstyper">
      <Row className="tiltakstyper-oversikt-actions">
        <Col lg={4}>
          <Sokefelt />
        </Col>
        <Col className="opprett-nytt-tiltak__knapp__wrapper">
          <Link to="/tiltakstyper/opprett" className="knapp">
            Opprett tiltakstype
          </Link>
        </Col>
      </Row>
      <Row>
        <Tiltaksoversikt tiltakstyper={data} />
      </Row>
    </MainView>
  );
};

export default TiltakstypeOversikt;
