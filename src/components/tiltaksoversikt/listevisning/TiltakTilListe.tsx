import React from 'react';
import '../Tiltak.less';

export interface TiltakListevisningProps {
  id: number;
  tittel: string;
  ingress: string;
  veilederToggle: boolean;
}

const TiltakTilListe = ({ tittel, ingress, id, veilederToggle }: TiltakListevisningProps) => {
  return (
    <tr>
      {veilederToggle && <td>{id}</td>}
      <td>
        <a href={'tiltak/' + id}>{tittel}</a>
      </td>
      <td>{ingress}</td>
    </tr>
  );
};

export default TiltakTilListe;
