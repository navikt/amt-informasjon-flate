import TiltakRad from './TiltakRad';
import React from 'react';
import { useSelector } from 'react-redux';
import { TiltakProps } from '../bildevisning/Tiltakskort';

export interface TiltakslisteProps {
  tiltaksliste: Array<TiltakProps>;
}

const Tiltaksliste = ({ tiltaksliste }: TiltakslisteProps) => {
  const veilederToggle = useSelector((state: any) => state.brukerVisningsReducer.brukerVisning);

  return (
    <div className="tiltaksoversikt__listevisning">
      <table className="tabell tabell--stripet">
        <thead>
          <tr>
            {veilederToggle && <th>ID</th>}
            <th>Tittel</th>
            <th>Ingress</th>
            {veilederToggle && <th>Kategori</th>}
            {veilederToggle && <th>Tiltakstype</th>}
          </tr>
        </thead>
        <tbody>
          {tiltaksliste.map((tiltak: TiltakProps) => (
            <TiltakRad {...tiltak} key={tiltak.id} veilederToggle={veilederToggle} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tiltaksliste;
