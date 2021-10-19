import React from 'react';
import { Tiltakstype } from '../../../core/domain/Tiltakstype';
import Link from '../../link/Link';
import './TiltakstypeRad.less';
import { kebabCase } from '../../../utils/Utils';

interface TiltakstypeRadProps {
  tiltakstype: Tiltakstype;
}

const TiltakstypeRad = ({ tiltakstype }: TiltakstypeRadProps) => {
  const { id, tittel, ingress } = tiltakstype;
  return (
    <tr key={id} className="tabell__row" data-testid="tabellrad">
      <td>
        <Link to={`/tiltakstyper/${id}`} isInline data-testid={`tabellrad_${kebabCase(tittel)}`}>
          {tittel}
        </Link>
      </td>
      <td className="tabell__row__ingress">{ingress}</td>
    </tr>
  );
};

export default TiltakstypeRad;
