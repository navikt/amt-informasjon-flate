import React from 'react';
import '../Tiltak.less';
import { TiltakProps } from '../bildevisning/Tiltakskort';

const TiltakRad = ({ id, tiltakstype, kategori, tittel, ingress, veilederToggle }: TiltakProps) => {
  return (
    <tr>
      {veilederToggle && <td>{id}</td>}
      <td>
        <a href={'tiltak/' + id}>{tittel}</a>
      </td>
      <td>{ingress}</td>
      {veilederToggle && <td>{tiltakstype}</td>}
      {veilederToggle && <td>{kategori}</td>}
    </tr>
  );
};

export default TiltakRad;
