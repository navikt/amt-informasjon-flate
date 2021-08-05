import React from 'react';
import '../Tiltak.less';
import { Kategori, Tiltakstype } from '../../../data/Tiltakstyper';

export interface TiltakRadProps {
  id: number;
  tiltakstype: Tiltakstype;
  kategori: Kategori;
  tittel: string;
  ingress: string;
  veilederToggle: boolean;
}

const TiltakRad = ({ id, tiltakstype, kategori, tittel, ingress, veilederToggle }: TiltakRadProps) => {
  return (
    <tr>
      {veilederToggle && <td>{id}</td>}
      {veilederToggle && <td>{tiltakstype}</td>}
      {veilederToggle && <td>{kategori}</td>}
      <td>
        <a href={'tiltak/' + id}>{tittel}</a>
      </td>
      <td>{ingress}</td>
    </tr>
  );
};

export default TiltakRad;
