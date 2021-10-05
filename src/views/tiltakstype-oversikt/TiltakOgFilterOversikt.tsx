import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Tiltaksoversikt from '../../components/tiltaksoversikt/Tiltaksoversikt';
import Sokefelt from '../../components/filtrering/Sokefelt';
import { Knapp } from 'nav-frontend-knapper';
import './TiltakOgFilterOversikt.less';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import { Tiltakstype } from '../../core/domain/Tiltakstype';
import MainView from '../../layouts/MainView';

const TiltakOgFilterOversikt = () => {
  const history = useHistory();
  const { data } = useQuery<Tiltakstype[]>(QueryKeys.Tiltakstyper, TiltakstypeService.getAllTiltakstyper);

  return (
    <MainView>
      <Row>
        <Col>
          <Sokefelt />
        </Col>
        <Col className="opprett-nytt-tiltak__knapp__wrapper">
          <Knapp onClick={() => history.push('/admin/opprett-tiltakstype')}>Opprett ny tiltakstype</Knapp>
        </Col>
      </Row>
      <Row>
        <Tiltaksoversikt tiltakstyper={data} />
      </Row>
    </MainView>
  );
};

export default TiltakOgFilterOversikt;
