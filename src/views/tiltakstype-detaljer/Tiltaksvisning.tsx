import React from 'react';
import { useParams } from 'react-router-dom';
import './Tiltaksvisning.less';
import { Innholdstittel } from 'nav-frontend-typografi';
import { useQuery } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AlertStripe from 'nav-frontend-alertstriper';
import { Hovedknapp } from 'nav-frontend-knapper';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import MainView from '../../layouts/MainView';
import Link from '../../components/link/Link';

interface routeParams {
  id: string;
}

const Tiltaksvisning = () => {
  const { id }: routeParams = useParams();

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
    <MainView showBackButton>
      <div className="tiltaksvisning">
        <Innholdstittel>{data?.tittel}</Innholdstittel>

        <p className="tiltaksvisning__beskrivelse">{data?.beskrivelse}</p>

        <Link to={`/admin/rediger-tiltakstype/${id}`} className="knapp knapp--hoved">
          Rediger
        </Link>
      </div>
    </MainView>
  );
};

export default Tiltaksvisning;
