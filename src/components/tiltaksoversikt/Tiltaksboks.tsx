import React from 'react';
import './Tiltak.less';

export interface TiltaksboksProps {
  id: number;
  tittel: String;
  beskrivelse: String;
}

const Tiltaksboks = (props: TiltaksboksProps) => {
  return (
    <a href="">
      {/* Lenke til visning av tiltaket */}

      <div className="tiltakBox">
        {/* Kanskje bytte ut med nav komponent? */}
        <p>
          <b>{props.tittel}</b>
        </p>

        <p>{props.beskrivelse}</p>
      </div>
    </a>
  );
};

export default Tiltaksboks;
