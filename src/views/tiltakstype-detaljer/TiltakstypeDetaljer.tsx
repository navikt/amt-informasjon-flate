import React from 'react';
import { useParams } from 'react-router-dom';
import AlertStripe from 'nav-frontend-alertstriper';
import MainView from '../../layouts/MainView';
import Link from '../../components/link/Link';
import { Ingress, Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import { Col, Row, Stack } from 'react-bootstrap';
import Panel from 'nav-frontend-paneler';
import useTiltakstype from '../../hooks/tiltakstype/useTiltakstype';

interface routeParams {
  id: string;
}

const TiltakstypeDetaljer = () => {
  const { id }: routeParams = useParams();

  const { data, isError } = useTiltakstype(id);

  if (isError) {
    return <AlertStripe type="feil">Det skjedde en feil</AlertStripe>;
  }

  return (
    <MainView showBackButton title={data?.tittel}>
      <Row>
        <Col lg={8}>
          <Stack gap={5}>
            <div>
              <Ingress>{data?.ingress}</Ingress>
            </div>
            <div>
              <Normaltekst>{data?.beskrivelse}</Normaltekst>
            </div>
          </Stack>
        </Col>
        <Col lg={4}>
          <Panel border>
            <Systemtittel>Sidemeny</Systemtittel>
            <Link to={`/tiltakstyper/${id}/rediger`} className="knapp knapp--hoved">
              Rediger
            </Link>
          </Panel>
        </Col>
      </Row>
    </MainView>
  );
};

export default TiltakstypeDetaljer;
