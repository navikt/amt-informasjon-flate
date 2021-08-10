import React, { useState, useEffect } from 'react';
import Tiltakskort, { TiltakProps } from './bildevisning/Tiltakskort';
import './Tiltak.less';
import { useSelector } from 'react-redux';
import '../visning/TiltakOgFilterOversikt.less';
import 'nav-frontend-tabell-style';
import Tiltaksliste from './listevisning/Tiltaksliste';

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
    const filtrertListe = tiltaksliste.slice().filter(tiltak => {
      console.log(tiltak.kategori);
      console.log(tiltak.tiltakstype);
      return (
        (filterState.tiltakstype.length === 0 || filterState.tiltakstype.includes(tiltak.tiltakstype)) &&
        (filterState.kategori.length === 0 || filterState.kategori.includes(tiltak.kategori))
      );
    });
    setTiltakslisteFiltrert(filtrertListe);
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
