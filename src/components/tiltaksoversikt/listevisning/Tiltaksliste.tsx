import TiltakTilListe from './TiltakTilListe';
import React from 'react';
import { useSelector } from 'react-redux';
import { TiltakskortProps } from '../bildevisning/Tiltakskort';

export interface TiltakslisteProps {
  tiltaksliste: Array<TiltakskortProps>;
}

const Tiltaksliste = ({ tiltaksliste }: TiltakslisteProps) => {
  const veilederToggle = useSelector((state: any) => state.brukerVisningsReducer.brukerVisning);

  return (
    <div className="tiltaksoversikt_listevisning">
      <table className="tabell tabell--stripet">
        <thead>
          <tr>
            {veilederToggle && <th>ID</th>}
            <th>Tittel</th>
            <th>Ingress</th>
          </tr>
        </thead>
        <tbody>
          {tiltaksliste.map((tiltak: TiltakskortProps) => (
            <TiltakTilListe {...tiltak} key={tiltak.id} veilederToggle={veilederToggle} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tiltaksliste;
