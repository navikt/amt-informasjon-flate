import React from 'react';
import Tiltaksoversikt from '../../components/tiltaksoversikt/Tiltaksoversikt';
import Sokefelt from '../../components/filtrering/Sokefelt';
import { Knapp } from 'nav-frontend-knapper';
import './TiltakOgFilterOversikt.less';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import { Tiltakstype } from '../../core/domain/Tiltakstype';
import { Link } from 'react-router-dom';

const TiltakOgFilterOversikt = () => {
  const { data } = useQuery<Tiltakstype[]>(QueryKeys.Tiltakstyper, TiltakstypeService.getAllTiltakstyper);

  return (
    <div className="tiltak-og-filter__grid">
      <Sokefelt />

      <Link to="/admin/opprett-tiltakstype" className="opprett-nytt-tiltak__knapp">
        <Knapp>Opprett ny tiltakstype</Knapp>
      </Link>
      <Tiltaksoversikt tiltakstyper={data} />
    </div>
  );
};

export default TiltakOgFilterOversikt;
