import React from 'react';
import Tiltaksoversikt from '../../components/tiltaksoversikt/Tiltaksoversikt';
import Sokefelt from '../../components/filtrering/Sokefelt';
import { Knapp } from 'nav-frontend-knapper';
import Lenke from 'nav-frontend-lenker';
import './TiltakOgFilterOversikt.less';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import { Tiltakstype } from '../../core/domain/Tiltakstype';

const TiltakOgFilterOversikt = () => {
  const { isLoading, isSuccess, data, isError } = useQuery<Tiltakstype[]>(
    QueryKeys.Tiltakstyper,
    TiltakstypeService.getAllTiltakstyper
  );

  return (
    <div className="tiltak-og-filter__grid">
      <Sokefelt />

      <Lenke href="../admin/opprett-tiltakstype" className="opprett-nytt-tiltak__knapp">
        <Knapp>Opprett ny tiltakstype</Knapp>
      </Lenke>
      <Tiltaksoversikt tiltakstyper={data} />
    </div>
  );
};

export default TiltakOgFilterOversikt;
