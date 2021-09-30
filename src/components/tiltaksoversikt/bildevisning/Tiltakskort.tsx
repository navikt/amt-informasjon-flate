import React from 'react';
import { Link } from 'react-router-dom';
import { Undertittel } from 'nav-frontend-typografi';
import { Tiltakstype } from '../../../domain/Domain';
import './Tiltakskort.less';

const Tiltakskort = ({ tittel, ingress, id }: Tiltakstype) => {
  const imgUrl = 'https://picsum.photos/200/300';

  return (
    <Link to={`/tiltakstype/${id}`} className="remove-link-style">
      <div className="tiltakskort">
        <img src={imgUrl} alt={tittel} />
        <div>
          <Undertittel className="tiltakskort__tittel">{tittel}</Undertittel>
          <p>{ingress}</p>
        </div>
      </div>
    </Link>
  );
};

export default Tiltakskort;
