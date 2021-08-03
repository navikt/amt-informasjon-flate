import React from 'react';
import { useSelector } from 'react-redux';
import './ToppMeny.less';
import { Systemtittel } from 'nav-frontend-typografi';

const Visningsmodus = () => {
  const veilederToggle = useSelector((state: any) => state.visningsToggle.veiledervisning);
  return (
    <div className="visningsmodus">
      {veilederToggle === true ? (
        <Systemtittel>
          <span>Veiledervisning</span>
        </Systemtittel>
      ) : (
        <Systemtittel>
          <span>Brukervisning</span>
        </Systemtittel>
      )}
    </div>
  );
};

export default Visningsmodus;
