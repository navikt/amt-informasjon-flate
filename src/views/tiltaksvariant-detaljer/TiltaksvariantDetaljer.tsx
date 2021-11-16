import React from 'react';
import { useParams } from 'react-router-dom';
import AlertStripe from 'nav-frontend-alertstriper';
import MainView from '../../layouts/MainView';
import Link from '../../components/link/Link';
import { Ingress, Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import { Col, Row, Stack } from 'react-bootstrap';
import Panel from 'nav-frontend-paneler';
import useTiltaksvariant from '../../hooks/tiltaksvariant/useTiltaksvariant';
import useTiltaksgjennomforingerByTiltaksvariantId from '../../hooks/tiltaksgjennomforing/useTiltaksgjennomforingerByTiltaksvariantId';
import { kebabCase } from '../../utils/Utils';
import TiltaksgjennomforingsTabell from './components/TiltaksgjennomforingTabell';

interface RouteParams {
  id: string;
}

const TiltaksvariantDetaljer = () => {
  const { id } = useParams<RouteParams>();

  const tiltaksvariant = useTiltaksvariant(id);
  const tiltaksgjennomforinger = useTiltaksgjennomforingerByTiltaksvariantId(id);

  if (tiltaksvariant.isError) {
    return <AlertStripe type="feil">Det skjedde en feil</AlertStripe>;
  }

  if (!tiltaksvariant.data) {
    // TODO: loading
    return null;
  }

  const { tittel, ingress, beskrivelse } = tiltaksvariant.data;

  return (
    <MainView showBackButton title={tittel} dataTestId={`tiltaksvariant_header_${kebabCase(tittel)}`}>
      <Row>
        <Col lg={8}>
          <Stack gap={5}>
            <div>
              <Ingress data-testid="tiltaksvariant_ingress">{ingress}</Ingress>
            </div>
            <div>
              <Normaltekst data-testid="tiltaksvariant_beskrivelse">{beskrivelse}</Normaltekst>
            </div>
          </Stack>
        </Col>
        <Col lg={4}>
          <Panel border>
            <Systemtittel>Sidemeny</Systemtittel>
            <Link
              to={`/tiltaksvarianter/${id}/rediger`}
              className="knapp knapp--hoved"
              data-testid="knapp_rediger-tiltaksvariant"
            >
              Rediger
            </Link>
          </Panel>
        </Col>
      </Row>
      <Row>
        <TiltaksgjennomforingsTabell tiltaksgjennomforinger={tiltaksgjennomforinger.data} />
      </Row>
    </MainView>
  );
};

export default TiltaksvariantDetaljer;
