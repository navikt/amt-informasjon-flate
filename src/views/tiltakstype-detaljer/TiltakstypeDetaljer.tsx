import React from 'react';
import { useParams } from 'react-router-dom';
import AlertStripe from 'nav-frontend-alertstriper';
import MainView from '../../layouts/MainView';
import Link from '../../components/link/Link';
import { Ingress, Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import { Col, Row, Stack } from 'react-bootstrap';
import Panel from 'nav-frontend-paneler';
import useTiltaksgjennomforingerByTiltakstypeId from '../../hooks/tiltaksgjennomforing/useTiltaksgjennomforingerByTiltakstypeId';
import useTiltakstype from '../../hooks/tiltakstyper/useTiltakstype';
import { kebabCase } from '../../utils/Utils';

interface routeParams {
  id: string;
}

const TiltakstypeDetaljer = () => {
  const { id }: routeParams = useParams();

  const tiltakstype = useTiltakstype(id);
  const tiltaksgjennomforinger = useTiltaksgjennomforingerByTiltakstypeId(id);

  if (tiltakstype.isError) {
    return <AlertStripe type="feil">Det skjedde en feil</AlertStripe>;
  }

  return (
    <MainView showBackButton title={tiltakstype.data?.tittel} dataTestId={`tiltakstype_header_${tiltakstype.data && kebabCase(tiltakstype.data?.tittel)}`}>
      <Row>
        <Col lg={8}>
          <Stack gap={5}>
            <div>
              <Ingress data-testid="tiltakstype_ingress">{tiltakstype.data?.ingress}</Ingress>
            </div>
            <div>
              <Normaltekst data-testid="tiltakstype_beskrivelse">{tiltakstype.data?.beskrivelse}</Normaltekst>
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

export default TiltakstypeDetaljer;
