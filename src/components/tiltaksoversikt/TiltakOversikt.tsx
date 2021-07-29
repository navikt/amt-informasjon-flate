import React from 'react';
import Tiltakskort, { TiltaksboksProps } from './Tiltakskort';
import './Tiltak.less';

export interface TiltakOversiktProps {
  tiltaksliste: Array<TiltaksboksProps>;
}

const TiltakOversikt = (props: TiltakOversiktProps) => {
  return (
    <div className="tiltakOversikt">
      {props.tiltaksliste.map((tiltak: TiltaksboksProps) => (
        <Tiltakskort {...tiltak} key={tiltak.id} />
      ))}
    </div>
  );
};

export default TiltakOversikt;