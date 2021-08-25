import React from 'react';
import { useSelector } from 'react-redux';
import TiltakRad from './TiltakRad';
import { Tiltak } from '../../../domain/Domain';

export interface TiltakslisteProps {
  tiltaksliste: Array<Tiltak>;
}

const Tiltaksliste = ({ tiltaksliste }: TiltakslisteProps) => {
  const brukervisningsToggle = useSelector((state: any) => state.toggleReducer.brukerVisning);

  return (
    <div className="tiltaksoversikt__listevisning">
      <table className="tabell tabell--stripet">
        <thead>
          <tr>
            {brukervisningsToggle && <th>ID</th>}
            <th>Tittel</th>
            <th>Ingress</th>
            {brukervisningsToggle && <th>Kategori</th>}
            {brukervisningsToggle && <th>Tiltakstype</th>}
          </tr>
        </thead>
        <tbody>
          {tiltaksliste.map((tiltak: Tiltak) => (
            <TiltakRad key={tiltak.id} tiltak={tiltak} brukervisningsToggle={brukervisningsToggle} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tiltaksliste;
