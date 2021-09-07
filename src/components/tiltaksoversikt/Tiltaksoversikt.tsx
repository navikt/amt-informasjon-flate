import React, { useEffect, useState } from 'react';
import Tiltakskort from './bildevisning/Tiltakskort';
import { useSelector } from 'react-redux';
import '../visning/TiltakOgFilterOversikt.less';
import 'nav-frontend-tabell-style';
import { Tiltak } from '../../domain/Domain';
import Tiltaksliste from './listevisning/Tiltaksliste';
import { useQuery } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AlertStripe from 'nav-frontend-alertstriper';
import {
  isKategoriInFilter,
  isKommuneInFilter,
  isRegionInFilter,
  isTiltaktypeInFilter,
} from './TiltaksoversiktFilterUtils';
import './bildevisning/Tiltakskort.less';

const Tiltaksoversikt = () => {
  const bildeToggle: boolean = useSelector((state: any) => state.toggleReducer.bildeListeVisning);
  const [tiltakslisteFiltrert, setTiltakslisteFiltrert] = useState<Tiltak[]>([]);
  const filterState = useSelector((state: any) => state.filterReducer);

  const { isLoading, data, error } = useQuery('tiltak', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak').then(res => res.json())
  );

  useEffect(() => {
    if (data) {
      const filtrertListe = data.filter((tiltak: any) => {
        return (
          isTiltaktypeInFilter(tiltak.tiltakstype, filterState.tiltakstype) &&
          isKategoriInFilter(tiltak.kategori, filterState.kategori) &&
          isRegionInFilter(tiltak.region, filterState.region) &&
          isKommuneInFilter(tiltak.region.kommuner, filterState.kommuner)
        );
      });
      setTiltakslisteFiltrert(filtrertListe);
    }
  }, [filterState, data]);

  const bildetoggle = () => {
    return bildeToggle ? (
      <div className="tiltaksoversikt--bildevisning">
        {tiltakslisteFiltrert &&
          tiltakslisteFiltrert.map((tiltak: Tiltak) => <Tiltakskort {...tiltak} key={tiltak.id} />)}
      </div>
    ) : (
      <Tiltaksliste tiltaksliste={tiltakslisteFiltrert} />
    );
  };

  return (
    <div className="tiltaksoversikt">
      {isLoading && <NavFrontendSpinner />}
      {data && bildetoggle()}
      {error && <AlertStripe type="feil">Det har oppstått en feil</AlertStripe>}
    </div>
  );
};

export default Tiltaksoversikt;
