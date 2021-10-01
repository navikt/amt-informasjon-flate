import React from 'react';
import TiltakRad from './TiltakRad';
import { Tiltakstype } from '../../../core/domain/Tiltakstype';

export interface TiltakslisteProps {
  tiltaksliste?: Array<Tiltakstype>;
}

const Tiltaksliste = ({ tiltaksliste }: TiltakslisteProps) => {
  return (
    <div className="tiltaksoversikt--listevisning">
      <table className="tabell tabell--stripet">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tittel</th>
            <th>Ingress</th>
          </tr>
        </thead>
        <tbody>
          {tiltaksliste?.map((tiltakstype: Tiltakstype) => (
            <TiltakRad key={tiltakstype.id} tiltak={tiltakstype} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tiltaksliste;
