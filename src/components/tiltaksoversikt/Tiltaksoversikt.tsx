import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AlertStripe from 'nav-frontend-alertstriper';
import 'nav-frontend-tabell-style';
import Tiltakskort from './bildevisning/Tiltakskort';
import { Tiltakstype } from '../../domain/Domain';
import Tiltaksliste from './listevisning/Tiltaksliste';
import { isSearchTextInFilter } from './TiltaksoversiktFilterUtils';
import './bildevisning/Tiltakskort.less';
import '../body/TiltakOgFilterOversikt.less';

const Tiltaksoversikt = () => {
  const bildeToggle: boolean = useSelector((state: any) => state.toggleReducer.bildeListeVisning);
  const [tiltakslisteFiltrert, setTiltakslisteFiltrert] = useState<Tiltakstype[]>([]);
  const filterState = useSelector((state: any) => state.filterReducer);

  const { isLoading, isSuccess, data, isError } = useQuery('tiltakstyper', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltakstyper').then(res => res.json())
  );

  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      const filtrertListe = data.filter((tiltak: any) => {
        return  isSearchTextInFilter(tiltak, filterState.sokefelt);
      });
      setTiltakslisteFiltrert(filtrertListe);
    }
  }, [filterState, data, isSuccess]);

  const bildetoggle = () => {
    return bildeToggle ? (
      <div className="tiltaksoversikt--bildevisning">
        {tiltakslisteFiltrert &&
          tiltakslisteFiltrert.map((tiltak: Tiltakstype) => <Tiltakskort {...tiltak} key={tiltak.id} />)}
      </div>
    ) : (
      <Tiltaksliste tiltaksliste={tiltakslisteFiltrert} />
    );
  };

  return (
    <div className="tiltaksoversikt">
      {isLoading && <NavFrontendSpinner />}
      {isSuccess && bildetoggle()}
      {isError && <AlertStripe type="feil">Det har oppstått en feil</AlertStripe>}
    </div>
  );
};

export default Tiltaksoversikt;
