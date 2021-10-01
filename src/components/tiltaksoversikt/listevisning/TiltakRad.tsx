import React from 'react';
import { Tiltakstype } from '../../../core/domain/Tiltakstype';
import { Link } from 'react-router-dom';
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
        <Link to={`/tiltakstype/${id}`} className="tabell__link">
          {tittel}
        </Link>
      </td>
      <td>{ingress}</td>
    </tr>
  );
};

export default TiltakRad;
