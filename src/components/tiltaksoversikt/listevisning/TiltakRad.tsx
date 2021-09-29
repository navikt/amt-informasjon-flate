import React from 'react';
import { Tiltakstype } from '../../../domain/Domain';
import { Link } from 'react-router-dom';
import './TiltakListevisning.less';

interface TiltakRadProps {
  tiltak: Tiltakstype;
}

const TiltakRad = ({ tiltak }: TiltakRadProps) => {
  return (
    <tr key={tiltak.id}>
      <td>{tiltak.id}</td>
      <td>
        <Link to={'../tiltakstype/' + tiltak.id} className="tabell__link">
          {tiltak.tittel}
        </Link>
      </td>
      <td>{tiltak.ingress}</td>
    </tr>
  );
};

export default TiltakRad;
