import React from 'react';
import '../bildevisning/Tiltakskort.less';
import { Kategori, Tiltak, Tiltakstype } from '../../../domain/Domain';
import { Link } from 'react-router-dom';
import { stringFormatting } from '../../../utils/Utils';

interface TiltakRadProps {
  tiltak: Tiltak;
  brukervisningsToggle?: boolean;
}

const TiltakRad = ({ tiltak, brukervisningsToggle }: TiltakRadProps) => {
  return (
    <tr key={tiltak.id}>
      {brukervisningsToggle && <td>{tiltak.id}</td>}
      <td>
        <Link to={'tiltak/' + tiltak.id}>{tiltak.tittel}</Link>
      </td>
      <td>{tiltak.ingress}</td>
      {brukervisningsToggle && <td>{stringFormatting(tiltak.kategori)}</td>}
      {brukervisningsToggle && <td>{stringFormatting(tiltak.tiltakstype)}</td>}
    </tr>
  );
};

export default TiltakRad;
