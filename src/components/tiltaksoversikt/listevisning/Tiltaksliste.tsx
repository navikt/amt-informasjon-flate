import TiltakRad from './TiltakRad';
import React from 'react';
import { useSelector } from 'react-redux';
import { TiltakProps } from '../bildevisning/Tiltakskort';

export interface TiltakslisteProps {
  tiltaksliste: Array<TiltakProps>;
}

const Tiltaksliste = ({ tiltaksliste }: TiltakslisteProps) => {
  const brukervisningsToggle = useSelector((state: any) => state.brukerVisningsReducer.brukerVisning);

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
          {tiltaksliste.map((tiltak: TiltakProps) => (
            <TiltakRad {...tiltak} key={tiltak.id} brukervisningsToggle={brukervisningsToggle} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tiltaksliste;
