import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import './Tiltaksvisning.less';
import '../../App.less';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import { useQuery } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AlertStripe from 'nav-frontend-alertstriper';
import { Knapp } from 'nav-frontend-knapper';
import { ReactComponent as Edit } from '../../ikoner/Edit.svg';
import { Tiltakstype } from '../../core/domain/Tiltakstype';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';

interface routeParams {
  id: string;
}

const Tiltaksvisning = () => {
  const { id }: routeParams = useParams();
  const history = useHistory();

  const { isLoading, isSuccess, data, isError } = useQuery(QueryKeys.Tiltakstyper, () =>
    TiltakstypeService.getTiltakstypeById(id)
  );

  if (isLoading) {
    return <NavFrontendSpinner />;
  }

  if (isError) {
    return <AlertStripe type="feil">Det skjedde en feil</AlertStripe>;
  }

  return (
    <div className="tiltaksvisning__grid">
      <Tilbakeknapp className="tiltaksvisning__tilbakeknapp" onClick={() => history.push('/')} />

      <Link to={`/admin/rediger-tiltakstype/${id}`} className="tiltaksvisning__rediger-knapp">
        <Knapp>
          Rediger tiltak <Edit />
        </Knapp>
      </Link>

      <div className="tiltaksvisning__informasjon">
        <div className="tiltaksvisning__topptekst">
          <Innholdstittel className="topptekst__overskrift">{data?.tittel}</Innholdstittel>
          <Normaltekst className="topptekst__tiltaksnummer">Tiltaksnummer: {data?.id}</Normaltekst>
        </div>
        <img className="tiltaksvisning__bilde" src="https://picsum.photos/500/500" alt={'Bilde av ' + data?.tittel} />
        <div className="tiltaksvisning__beskrivelse">
          <p>{data?.ingress}</p>
          <p>{data?.beskrivelse}</p>
        </div>
      </div>
    </div>
  );
};

export default Tiltaksvisning;
