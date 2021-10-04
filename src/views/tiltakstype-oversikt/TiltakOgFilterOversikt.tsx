import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Tiltaksoversikt from '../../components/tiltaksoversikt/Tiltaksoversikt';
import Sokefelt from '../../components/filtrering/Sokefelt';
import { Knapp } from 'nav-frontend-knapper';
import './TiltakOgFilterOversikt.less';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import { Tiltakstype } from '../../core/domain/Tiltakstype';

const TiltakOgFilterOversikt = () => {
  const { data } = useQuery<Tiltakstype[]>(QueryKeys.Tiltakstyper, TiltakstypeService.getAllTiltakstyper);

  return (
    <>
      <Row>
        <Col>
          <Sokefelt />
        </Col>
        <Col className="opprett-nytt-tiltak__knapp__wrapper">
          <Link to="/admin/opprett-tiltakstype">
            <Knapp>Opprett ny tiltakstype</Knapp>
          </Link>
        </Col>
      </Row>
      <Row>
        <Tiltaksoversikt tiltakstyper={data} />
      </Row>
    </>
  );
};

export default TiltakOgFilterOversikt;
