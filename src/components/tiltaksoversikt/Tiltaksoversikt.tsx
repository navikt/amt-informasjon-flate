import React, { useEffect, useState } from 'react';
import Tiltakskort  from './bildevisning/Tiltakskort';
import './Tiltak.less';
import { useSelector } from 'react-redux';
import '../visning/TiltakOgFilterOversikt.less';
import 'nav-frontend-tabell-style';
import { Tiltak } from '../../domain/domain';
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
import '../visning/TiltakOgFilterOversikt.less';

const Tiltaksoversikt = () => {
  const bildeToggle: boolean = useSelector((state: any) => state.toggleReducer.bildeListeVisning);
  const [tiltaksliste, setTiltaksliste] = useState<Tiltak[]>([]);
  const [tiltakslisteFiltrert, setTiltakslisteFiltrert] = useState<Tiltak[]>([]);
  const filterState = useSelector((state: any) => state.filterReducer);

  const { isLoading, data, error } = useQuery('tiltaksoversikt', () =>
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
      <div className="tiltaksoversikt__bildevisning">
        {tiltakslisteFiltrert &&
          tiltakslisteFiltrert.map((tiltak: TiltakProps) => <Tiltakskort {...tiltak} key={tiltak.id} />)}
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
