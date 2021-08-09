import React from 'react';
import '../Tiltak.less';
import { Undertittel } from 'nav-frontend-typografi';
import { Kategori, Tiltakstype } from '../../../data/Tiltakstyper';

export interface TiltakProps {
  id: number;
  tiltakstype: Tiltakstype;
  kategori: Kategori;
  tittel: string;
  ingress: string;
  fylke?: string;
  kommune?: string;
  beskrivelse?: string;
  bilde?: Blob;
  veilederToggle?: boolean;
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
