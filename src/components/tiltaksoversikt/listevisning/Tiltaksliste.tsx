import React from 'react';
import TiltakRad from './TiltakRad';
import { Tiltak } from '../../../domain/Domain';

export interface TiltakslisteProps {
  tiltaksliste: Array<Tiltak>;
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
            <th>Tiltakstype</th>
          </tr>
        </thead>
        <tbody>
          {tiltaksliste.map((tiltak: Tiltak) => (
            <TiltakRad key={tiltak.id} tiltak={tiltak} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tiltaksliste;
