import React from 'react';
import { useParams } from 'react-router-dom';
import './TiltakstypeDetaljer.less';
import { useQuery } from 'react-query';
import AlertStripe from 'nav-frontend-alertstriper';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import MainView from '../../layouts/MainView';
import Link from '../../components/link/Link';
import { Ingress, Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import { Col, Row, Stack } from 'react-bootstrap';
import Panel from 'nav-frontend-paneler';

interface routeParams {
  id: string;
}

const TiltakstypeDetaljer = () => {
  const { id }: routeParams = useParams();

  const { data, isError } = useQuery([QueryKeys.Tiltakstyper, { id: id }], () =>
    TiltakstypeService.getTiltakstypeById(id)
  );

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
