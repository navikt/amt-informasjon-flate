import React from 'react';
import '../Tiltak.less';
import { TiltakProps } from '../bildevisning/Tiltakskort';

const TiltakRad = ({ id, tiltakstype, kategori, tittel, ingress, brukervisningsToggle }: TiltakProps) => {
  return (
    <tr>
      {brukervisningsToggle && <td>{id}</td>}
      <td>
        <a href={'tiltak/' + id}>{tittel}</a>
      </td>
      <td>{ingress}</td>
      {brukervisningsToggle && <td>{kategori}</td>}
      {brukervisningsToggle && <td>{tiltakstype}</td>}
    </tr>
  );
};

export default TiltakRad;
