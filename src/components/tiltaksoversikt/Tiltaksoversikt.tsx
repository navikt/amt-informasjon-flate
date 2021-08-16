import React, { useState, useEffect } from 'react';
import Tiltakskort, { TiltakProps } from './bildevisning/Tiltakskort';
import './Tiltak.less';
import { useSelector } from 'react-redux';
import '../visning/TiltakOgFilterOversikt.less';
import 'nav-frontend-tabell-style';
import Tiltaksliste from './listevisning/Tiltaksliste';
import { useQuery } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AlertStripe from 'nav-frontend-alertstriper';

const Tiltaksoversikt = () => {
  // const [tiltaksliste, setTiltaksliste] = useState<TiltakProps[]>([]);
  const [tiltakslisteFiltrert, setTiltakslisteFiltrert] = useState<TiltakProps[]>([]);
  const bildeToggle: boolean = useSelector((state: any) => state.toggleReducer.bildeListeVisning);
  const filterState = useSelector((state: any) => state.filterReducer);

  const { isLoading, data, error } = useQuery('tiltaksoversikt', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak').then(res => res.json())
  );

  // const hentAlleTiltakFraDB = (setTiltaksliste: (value: []) => void) => {
  //   fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak')
  //     .then(res => res.json())
  //     .then(data => setTiltaksliste(data));
  // };
  //
  // useEffect(() => {
  //   hentAlleTiltakFraDB(setTiltaksliste);
  // }, []);

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     const filtrertListe = data.filter((tiltak: any) => {
  //       return (
  //         (filterState.tiltakstype.length === 0 || filterState.tiltakstype.includes(tiltak.tiltakstype)) &&
  //         (filterState.kategori.length === 0 || filterState.kategori.includes(tiltak.kategori))
  //       );
  //     });
  //     setTiltakslisteFiltrert(filtrertListe);
  //   }
  // }, [filterState, data]);

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
