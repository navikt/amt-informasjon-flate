import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './Tiltaksvisning.less';
import { Innholdstittel } from 'nav-frontend-typografi';
import { useQuery } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AlertStripe from 'nav-frontend-alertstriper';
import { Hovedknapp } from 'nav-frontend-knapper';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import MainView from '../../layouts/MainView';

interface routeParams {
  id: string;
}

const Tiltaksvisning = () => {
  const { id }: routeParams = useParams();
  const history = useHistory();

  const { isLoading, data, isError } = useQuery([QueryKeys.Tiltakstyper, { id: id }], () =>
    TiltakstypeService.getTiltakstypeById(id)
  );

  if (isLoading) {
    return <NavFrontendSpinner />;
  }

  if (isError) {
    return <AlertStripe type="feil">Det skjedde en feil</AlertStripe>;
  }

  return (
    <MainView isTilbakeknapp>
      <div className="tiltaksvisning">
        <Innholdstittel>{data?.tittel}</Innholdstittel>

        <p className="tiltaksvisning__beskrivelse">{data?.beskrivelse}</p>

        <Hovedknapp onClick={() => history.push(`/admin/rediger-tiltakstype/${id}`)}>Rediger tiltak</Hovedknapp>
      </div>
    </MainView>
  );
};

export default Tiltaksvisning;
