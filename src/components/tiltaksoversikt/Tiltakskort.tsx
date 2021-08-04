import React from 'react';
import './Tiltak.less';
import { Undertittel } from 'nav-frontend-typografi';

export interface TiltaksboksProps {
  id: number;
  tittel: string;
  ingress: string;
  bilde?: Blob;
}

const Tiltakskort = ({ tittel, ingress, bilde }: TiltaksboksProps) => {
  //TODO: legge til et grunnleggende bilde?
  const imgUrl = bilde ? URL.createObjectURL(bilde) : '';

  return (
    <a href="test" className="remove_link_style">
      {/* TODO: legg til lenke for visning av tiltaket */}

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
