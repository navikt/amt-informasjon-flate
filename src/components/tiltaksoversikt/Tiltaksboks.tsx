import React from 'react';
import './Tiltak.less';
import '../../App.less';
import { Undertittel } from 'nav-frontend-typografi';

export interface TiltaksboksProps {
  id: number;
  tittel: string;
  ingress: string;
  bilde?: Blob;
}

const Tiltaksboks = (props: TiltaksboksProps) => {
  //TODO: legge til et grunnleggende bilde?
  const imgUrl = props.bilde ? URL.createObjectURL(props.bilde) : '';

  return (
    <a href="" className="remove_link_style">
      {/* TODO: legg til lenke for visning av tiltaket */}

      <div className="tiltakboks">
        <img src={imgUrl} alt={props.tittel} />
        <div>
          <Undertittel className="tittel">{props.tittel}</Undertittel>

          <p>{props.ingress}</p>
        </div>
      </div>
    </a>
  );
};

export default Tiltaksboks;
