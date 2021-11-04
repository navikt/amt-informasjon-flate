import React from 'react';
import { useParams } from 'react-router-dom';
import MainView from '../../layouts/MainView';
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import { Col, Row, Stack } from 'react-bootstrap';
import Panel from 'nav-frontend-paneler';
import useTiltaksgjennomforing from '../../hooks/tiltaksgjennomforing/useTiltaksgjennomforing';

interface RouteParams {
  tiltaksTypeId: string;
  tiltaksGjennomforingId: string;
}

const TiltaksgjennomforingDetaljer = () => {
  const { tiltaksGjennomforingId }: RouteParams = useParams();

  const tiltaksgjennomforing = useTiltaksgjennomforing(tiltaksGjennomforingId);

  return (
    <MainView showBackButton title={tiltaksgjennomforing.data?.tittel}>
      <Row>
        <Col lg={8}>
          <Stack gap={5}>
            <div>
              <Normaltekst>{tiltaksgjennomforing.data?.beskrivelse}</Normaltekst>
            </div>
          </Stack>
        </Col>
        <Col lg={4}>
          <Panel border>
            <Systemtittel>Sidemeny</Systemtittel>
          </Panel>
        </Col>
      </Row>
    </MainView>
  );
};

export default TiltaksgjennomforingDetaljer;
