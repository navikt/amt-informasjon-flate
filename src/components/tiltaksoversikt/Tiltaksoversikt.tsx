import React from 'react';
import Tiltakskort, { TiltakskortProps } from './bildevisning/Tiltakskort';
import './Tiltak.less';
import { useSelector } from 'react-redux';
import '../visning/TiltakOgFilterOversikt.less';
import 'nav-frontend-tabell-style';
import Tiltaksliste from './listevisning/Tiltaksliste';

const Tiltaksoversikt = () => {
  //TODO fjern når vi får koblet til backend
  const tiltaksliste = [
    { id: 1, tittel: 'Truckførerkurs', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 2, tittel: 'Servicehund', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim.' },
    { id: 4, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 5, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 6, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const bildeToggle: boolean = useSelector((state: any) => state.bildeListeVisningsReducer.bildeListeVisning);

  return (
    <div className="tiltaksoversikt">
      {bildeToggle ? (
        <div className="tiltaksoversikt_bildevisning">
          {tiltaksliste.map((tiltak: TiltakskortProps) => (
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
