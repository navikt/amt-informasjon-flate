import React from 'react';
import TiltakstypeRad from './TiltakstypeRad';
import { Tiltakstype } from '../../../core/domain/Tiltakstype';

export interface TiltakstypelisteProps {
  tiltakstypeliste?: Array<Tiltakstype>;
}

const Tiltakstypeliste = ({ tiltakstypeliste }: TiltakstypelisteProps) => {
  return (
    <>
      <table className="tabell tabell--stripet" data-testid='tabell_oversikt-tiltakstyper'>
        <thead>
          <tr>
            <th>Tittel</th>
            <th>Ingress</th>
          </tr>
        </thead>
        <tbody>
          {tiltakstypeliste &&
            tiltakstypeliste?.map((tiltakstype: Tiltakstype) => (
              <TiltakstypeRad key={tiltakstype.id} tiltakstype={tiltakstype} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Tiltakstypeliste;
