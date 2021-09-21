import React from 'react';
import { Link } from 'react-router-dom';
import { Undertittel } from 'nav-frontend-typografi';
import { Tiltak } from '../../../domain/Domain';
import './Tiltakskort.less';

const Tiltakskort = ({ tittel, beskrivelse, id }: Tiltak) => {
  const imgUrl = 'https://picsum.photos/200/300';

  return (
    <Link to={'tiltak/' + id} className="remove-link-style">
      <div className="tiltakskort">
        <img src={imgUrl} alt={tittel} />
        <div>
          <Undertittel className="tiltakskort__tittel">{tittel}</Undertittel>
          <p>{beskrivelse}</p>
        </div>
      </div>
    </Link>
  );
};

export default Tiltakskort;
