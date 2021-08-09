import React, { useEffect, useState } from 'react';
import Tiltakskort, { TiltakProps } from './bildevisning/Tiltakskort';
import './Tiltak.less';
import { useSelector } from 'react-redux';
import '../visning/TiltakOgFilterOversikt.less';
import 'nav-frontend-tabell-style';
import Tiltaksliste from './listevisning/Tiltaksliste';
import { tiltakslisteMock } from '../mocks/TiltakslisteMock';

const Tiltaksoversikt = () => {
  const bildeToggle: boolean = useSelector((state: any) => state.bildeListeVisningsReducer.bildeListeVisning);
  const filterState = useSelector((state: any) => state.filterReducer);

  const [tiltaksliste, setTiltaksliste] = useState(tiltakslisteMock);

  useEffect(() => {
    const filtrertListe = tiltakslisteMock
      .slice()
      .filter(
        tiltak =>
          (filterState.tiltakstype.length === 0 || filterState.tiltakstype.includes(tiltak.tiltakstype)) &&
          (filterState.kategori.length === 0 || filterState.kategori.includes(tiltak.kategori))
      );

    setTiltaksliste(filtrertListe);
  }, [filterState]);

  return (
    <div className="tiltaksoversikt">
      {bildeToggle ? (
        <div className="tiltaksoversikt__bildevisning">
          {tiltaksliste.map((tiltak: TiltakProps) => (
            <Tiltakskort {...tiltak} key={tiltak.id} />
          ))}
        </div>
      ) : (
        <Tiltaksliste tiltaksliste={tiltaksliste} />
      )}
    </div>
  );
};

export default Tiltaksoversikt;
