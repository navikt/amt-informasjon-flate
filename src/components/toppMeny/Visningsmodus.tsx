import React from 'react';
import { useSelector } from 'react-redux';
import './ToppMeny.less';
import AlertStripe from 'nav-frontend-alertstriper';

const Visningsmodus = () => {
  const veilederToggle = useSelector((state: any) => state.visningsReducer.veiledervisning);
  return (
    <>
      {veilederToggle === false && (
        <AlertStripe type="info" className="visningsmodus">
          Brukervisning
        </AlertStripe>
      )}
    </>
  );
};

export default Visningsmodus;
