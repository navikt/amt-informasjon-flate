import React from 'react';
import Tiltakskort, { TiltaksboksProps } from './Tiltakskort';
import './Tiltak.less';

const TiltakOversikt = () => {
  //TODO fjern når vi får koblet til backend
  const tiltaksliste = [
    { id: 1, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 2, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim.' },
    { id: 4, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 5, tittel: 'Tittel', ingress: 'Lorem Ipsum dolor sit amet' },
    { id: 6, tittel: 'Tittel', ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <div className="tiltaksoversikt">
      {tiltaksliste.map((tiltak: TiltaksboksProps) => (
        <Tiltakskort {...tiltak} key={tiltak.id} />
      ))}
    </div>
  );
};

export default TiltakOversikt;
