import React from 'react';
import { Tiltakstype } from '../../../core/domain/Tiltakstype';
import Link from '../../link/Link';
import './TiltakstypeListevisning.less';

interface TiltakstypeRadProps {
  tiltakstype: Tiltakstype;
}

const TiltakstypeRad = ({ tiltakstype }: TiltakstypeRadProps) => {
  const { id, tittel, ingress } = tiltakstype;
  return (
    <tr key={id}>
      <td>
        <Link to={`/tiltakstyper/${id}`} isInline>
          {tittel}
        </Link>
      </td>
      <td>{ingress}</td>
    </tr>
  );
};

export default TiltakstypeRad;
