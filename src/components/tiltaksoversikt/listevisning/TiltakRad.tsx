import React from 'react';
import '../bildevisning/Tiltakskort.less';
import { Tiltak } from '../../../domain/Domain';
import { Link } from 'react-router-dom';

interface TiltakRadProps {
  tiltak: Tiltak;
  brukervisningsToggle?: boolean;
}

const TiltakRad = ({ tiltak, brukervisningsToggle }: TiltakRadProps) => {
  return (
    <tr>
      {brukervisningsToggle && <td>{tiltak.id}</td>}
      <td>
        <Link to={'tiltak/' + tiltak.id}>{tiltak.tittel}</Link>
      </td>
      <td>{tiltak.ingress}</td>
      {brukervisningsToggle && <td>{tiltak.kategori}</td>}
      {brukervisningsToggle && <td>{tiltak.tiltakstype}</td>}
    </tr>
  );
};

export default TiltakRad;
