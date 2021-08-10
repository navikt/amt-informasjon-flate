import React from 'react';
import '../Tiltak.less';
import { Undertittel } from 'nav-frontend-typografi';

export interface TiltakProps {
  id: number;
  tiltakstype: string;
  kategori: string;
  tittel: string;
  ingress: string;
  fylke?: string;
  kommune?: string;
  beskrivelse?: string;
  bilde?: Blob;
  brukervisningsToggle?: boolean;
}

const Tiltakskort = ({ tittel, ingress, bilde, id }: TiltakProps) => {
  //TODO: legge til et grunnleggende bilde?
  const imgUrl = bilde ? URL.createObjectURL(bilde) : '';

  return (
    <a href={'tiltak/' + id} className="remove-link-style">
      <div className="tiltakskort">
        <img src={imgUrl} alt={tittel} />
        <div>
          <Undertittel className="tittel">{tittel}</Undertittel>
          <p>{ingress}</p>
        </div>
      </div>
    </a>
  );
};

export default Tiltakskort;
