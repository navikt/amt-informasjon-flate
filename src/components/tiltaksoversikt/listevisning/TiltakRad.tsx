import React from 'react';
import '../Tiltak.less';
import { TiltakProps } from '../bildevisning/Tiltakskort';
import { Link } from 'react-router-dom';

const TiltakRad = ({ id, tiltakstype, kategori, tittel, ingress, brukervisningsToggle }: TiltakProps) => {
  return (
    <tr>
      {brukervisningsToggle && <td>{id}</td>}
      <td>
        <Link to={'tiltak/' + id}>{tittel}</Link>
      </td>
      <td>{ingress}</td>
      {brukervisningsToggle && <td>{kategori}</td>}
      {brukervisningsToggle && <td>{tiltakstype}</td>}
    </tr>
  );
};

export default TiltakRad;
