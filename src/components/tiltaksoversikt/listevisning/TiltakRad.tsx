import React from 'react';
import '../Tiltak.less';

export interface TiltakRadProps {
  id: number;
  tittel: string;
  ingress: string;
  veilederToggle: boolean;
}

const TiltakRad = ({ tittel, ingress, id, veilederToggle }: TiltakRadProps) => {
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

export default TiltakRad;
