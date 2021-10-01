import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AlertStripe from 'nav-frontend-alertstriper';
import 'nav-frontend-tabell-style';
import { Tiltakstype } from '../../core/domain/Tiltakstype';
import Tiltaksliste from './listevisning/Tiltaksliste';
import { isSearchTextInFilter } from './TiltaksoversiktFilterUtils';
import './bildevisning/Tiltakskort.less';
import '../../views/tiltakstype-oversikt/TiltakOgFilterOversikt.less';

const Tiltaksoversikt = () => {
  const [tiltakslisteFiltrert, setTiltakslisteFiltrert] = useState<Tiltakstype[]>([]);
  const filterState = useSelector((state: any) => state.filterReducer);

  const { isLoading, isSuccess, data, isError } = useQuery('tiltakstyper', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltakstyper').then(res => res.json())
  );

  useEffect(() => {
    if (isSuccess) {
      const filtrertListe = data.filter((tiltak: any) => {
        return isSearchTextInFilter(tiltak, filterState.sokefelt);
      });
      setTiltakslisteFiltrert(filtrertListe);
    }
  }, [filterState, data, isSuccess]);


  return (
    <div className="tiltaksoversikt">
      {isLoading && <NavFrontendSpinner />}
      {isSuccess &&  <Tiltaksliste tiltaksliste={tiltakslisteFiltrert} />}
      {isError && <AlertStripe type="feil">Det har oppstått en feil</AlertStripe>}
    </div>
  );
};

export default Tiltaksoversikt;
