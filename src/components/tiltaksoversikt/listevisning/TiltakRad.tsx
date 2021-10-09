import React from 'react';
import { Tiltakstype } from '../../../core/domain/Tiltakstype';
import Link from '../../link/Link';
import './TiltakListevisning.less';

interface TiltakRadProps {
  tiltak: Tiltakstype;
}

const TiltakRad = ({ tiltak }: TiltakRadProps) => {
  const { id, tittel, ingress } = tiltak;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>
        <Link to={`/tiltakstyper/${id}`} isInline>
          {tittel}
        </Link>
      </td>
      <td>{ingress}</td>
    </tr>
  );
};

export default TiltakRad;
