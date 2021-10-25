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

interface routeParams {
  id: string;
}

const TiltaksvariantDetaljer = () => {
  const { id }: routeParams = useParams();

  const tiltaksvariant = useTiltaksvariant(id);
  const tiltaksgjennomforinger = useTiltaksgjennomforingerByTiltaksvariantId(id);

  if (tiltaksvariant.isError) {
    return <AlertStripe type="feil">Det skjedde en feil</AlertStripe>;
  }

  return (
    <MainView showBackButton title={tiltaksvariant.data?.tittel} dataTestId={`tiltaksvariant_header_${tiltaksvariant.data && kebabCase(tiltaksvariant.data?.tittel)}`}>
      <Row>
        <Col lg={8}>
          <Stack gap={5}>
            <div>
              <Ingress data-testid="tiltaksvariant_ingress">{tiltaksvariant.data?.ingress}</Ingress>
            </div>
            <div>
              <Normaltekst data-testid="tiltaksvariant_beskrivelse">{tiltaksvariant.data?.beskrivelse}</Normaltekst>
            </div>
          </Stack>
        </Col>
        <Col lg={4}>
          <Panel border>
            <Systemtittel>Sidemeny</Systemtittel>
            <Link to={`/tiltaksvarianter/${id}/rediger`} className="knapp knapp--hoved" dataTestId="knapp_rediger-tiltaksvariant">
              Rediger
            </Link>
          </Panel>
        </Col>
      </Row>
      <Row>
        {/* TODO: Implementer tiltaksgjennomføing her (design). Kun for å vise at man får data */}
        <h2>Tiltaksgjennomføringer:</h2>
        {tiltaksgjennomforinger.data?.map(t => (
          <h3 key={t.id}>{t.tittel}</h3>
        ))}
      </Row>
    </MainView>
  );
};

export default TiltaksvariantDetaljer;
