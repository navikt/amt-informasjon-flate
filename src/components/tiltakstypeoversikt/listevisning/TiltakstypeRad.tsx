import React from 'react';
import { Tiltakstype } from '../../../core/domain/Tiltakstype';
import Link from '../../link/Link';
import './TiltakstypeRad.less';

interface TiltakstypeRadProps {
  tiltakstype: Tiltakstype;
}

const TiltakstypeRad = ({ tiltakstype }: TiltakstypeRadProps) => {
  const { id, tittel, ingress } = tiltakstype;
  console.log('ingress', ingress);
  return (
    <tr key={id} className="tabell__row">
      <td>
        <Link to={`/tiltakstyper/${id}`} isInline>
          {tittel}
        </Link>
      </td>
      <td className="tabell__row__ingress">{ingress}</td>
    </tr>
  );
};

export default TiltakstypeRad;
