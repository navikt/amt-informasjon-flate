import React from 'react';
import Tiltaksboks, { TiltaksboksProps } from './Tiltaksboks';
import './Tiltak.less';

export interface TiltakOversiktProps {
  tiltaksliste: Array<TiltaksboksProps>;
}

const TiltakOversikt = (props: TiltakOversiktProps) => {
  return (
    <div className="tiltakOversikt">
      {props.tiltaksliste.map((tiltak: TiltaksboksProps) => (
        <Tiltaksboks {...tiltak} key={tiltak.id} />
      ))}
    </div>
  );
};

export default TiltakOversikt;
