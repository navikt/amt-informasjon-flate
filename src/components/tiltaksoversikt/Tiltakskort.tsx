import React from 'react';
import './Tiltak.less';
import { Undertittel } from 'nav-frontend-typografi';

export interface TiltaksboksProps {
  id: number;
  tittel: string;
  ingress: string;
  bilde?: Blob;
}

const Tiltakskort = (props: TiltaksboksProps) => {
  //TODO: legge til et grunnleggende bilde?
  const imgUrl = props.bilde ? URL.createObjectURL(props.bilde) : '';

  return (
    <a href={'tiltak/' + props.id} className="remove_link_style">
      {/* TODO: legg til lenke for visning av tiltaket */}

      <div className="tiltakskort">
        <img src={imgUrl} alt={props.tittel} />
        <div>
          <Undertittel className="tittel">{props.tittel}</Undertittel>

          <p>{props.ingress}</p>
        </div>
      </div>
    </a>
  );
};

export default Tiltakskort;
