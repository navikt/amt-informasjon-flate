import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'nav-frontend-tabell-style';
import Tiltakskort, { TiltakProps } from './bildevisning/Tiltakskort';
import Tiltaksliste from './listevisning/Tiltaksliste';
import {
  isKategoriInFilter,
  isKommuneInFilter,
  isRegionInFilter,
  isTiltaktypeInFilter,
} from './TiltaksoversiktFilterUtils';
import './Tiltak.less';
import '../visning/TiltakOgFilterOversikt.less';

const Tiltaksoversikt = () => {
  const [tiltaksliste, setTiltaksliste] = useState<TiltakProps[]>([]);
  const [tiltakslisteFiltrert, setTiltakslisteFiltrert] = useState<TiltakProps[]>([]);
  const bildeToggle: boolean = useSelector((state: any) => state.bildeListeVisningsReducer.bildeListeVisning);
  const filterState = useSelector((state: any) => state.filterReducer);

  const hentAlleTiltakFraDB = (setTiltaksliste: (value: []) => void) => {
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak')
      .then(res => res.json())
      .then(data => setTiltaksliste(data));
  };

  useEffect(() => {
    hentAlleTiltakFraDB(setTiltaksliste);
  }, []);

  useEffect(() => {
    if (tiltaksliste.length > 0) {
      const filtrertListe = tiltaksliste.filter(tiltak => {
        return (
          isTiltaktypeInFilter(tiltak.tiltakstype, filterState.tiltakstype) &&
          isKategoriInFilter(tiltak.kategori, filterState.kategori) &&
          isRegionInFilter(tiltak.region, filterState.region) &&
          isKommuneInFilter(tiltak.region.kommuner, filterState.kommuner)
        );
      });
      setTiltakslisteFiltrert(filtrertListe);
    }
  }, [filterState, tiltaksliste]);
  return (
    <div className="tiltaksoversikt">
      {bildeToggle ? (
        <div className="tiltaksoversikt__bildevisning">
          {tiltakslisteFiltrert &&
            tiltakslisteFiltrert.map((tiltak: TiltakProps) => <Tiltakskort {...tiltak} key={tiltak.id} />)}
        </div>
      ) : (
        <Tiltaksliste tiltaksliste={tiltakslisteFiltrert} />
      )}
    </div>
  );
};

export default Tiltaksoversikt;
