import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Tiltaksvisning.less';
import BrukerVisningsToggle from '../toggle/BrukerVisningsToggle';
import { Innholdstittel, Undertittel } from 'nav-frontend-typografi';
import { useSelector } from 'react-redux';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import { useQuery } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AlertStripe from 'nav-frontend-alertstriper';

interface routeParams {
  id: string;
}

const Tiltaksvisning = () => {
  const brukervisningsToggle = useSelector((state: any) => state.toggleReducer.brukerVisning);
  const { id }: routeParams = useParams();

  const { isLoading, data, error } = useQuery('tiltak' + id, () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/' + id).then(res => res.json())
  );

  const history = useHistory();

  if (isLoading) {
    return <NavFrontendSpinner />;
  }

  if (error) {
    return <AlertStripe type="feil">Det skjedde en feil</AlertStripe>;
  }

  return (
    <>
      <div className="tiltaksvisning__grid">
        <Tilbakeknapp className="tilbakeknapp" onClick={() => history.push('/')} />

        {brukervisningsToggle && <Undertittel className="tiltaksnummer">{`Tiltaksnummer: ${data?.id}`}</Undertittel>}
        <BrukerVisningsToggle className="tiltaksvisning__brukervisningstoggle info__brukervisningstoggle" />

        <div className="generell-informasjon">
          <img src={'https://picsum.photos/500/500'} alt={'bilde av ' + data?.tittel} />

          <div className="beskrivelse">
            <Innholdstittel>{data?.tittel}</Innholdstittel>
            <p>{data?.ingress}</p>
            <p>{data?.beskrivelse}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tiltaksvisning;
