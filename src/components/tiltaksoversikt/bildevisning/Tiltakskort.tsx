import React from 'react';
import { Link } from 'react-router-dom';
import { Undertittel } from 'nav-frontend-typografi';
import { Kategori, Region, Tiltakstype } from '../../../domain/domain';
import '../Tiltak.less';

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
  brukervisningsToggle?: boolean;
  region: Region;
}

const Tiltakskort = ({ tittel, ingress, bilde, id }: TiltakProps) => {
  //TODO: legge til et grunnleggende bilde?
  const imgUrl = bilde ? URL.createObjectURL(bilde) : '';

  return (
    <Link to={'tiltak/' + id} className="remove-link-style">
      <div className="tiltakskort">
        <img src={imgUrl} alt={tittel} />
        <div>
          <Undertittel className="tittel">{tittel}</Undertittel>
          <p>{ingress}</p>
        </div>
      </div>
    </Link>
  );
};

export default Tiltakskort;
