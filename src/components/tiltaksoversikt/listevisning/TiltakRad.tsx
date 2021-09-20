import React from 'react';
import { Tiltak } from '../../../domain/Domain';
import { Link } from 'react-router-dom';
import { stringFormatting } from '../../../utils/Utils';
import './TiltakListevisning.less';

interface TiltakRadProps {
  tiltak: Tiltak;
}

const TiltakRad = ({ tiltak }: TiltakRadProps) => {
  return (
    <tr key={tiltak.id}>
      <td>{tiltak.id}</td>
      <td>
        <Link to={'tiltak/' + tiltak.id} className="tabell__link">
          {tiltak.tittel}
        </Link>
      </td>
      <td>{tiltak.ingress}</td>
      <td>{stringFormatting(tiltak.tiltakstype)}</td>
    </tr>
  );
};

export default TiltakRad;
