import { toggleBrukerVisning } from '../../redux/toggle/BrukerVisningsToggleSlice';
import Toggle from './Toggle';
import React from 'react';
import { useSelector } from 'react-redux';
import '../toppMeny/ToppMeny.less';

const BrukerVisningsToggle = () => {
  const veilederToggle = useSelector((state: any) => state.brukerVisningsReducer.brukerVisning);

  return (
    <div className="veiledervisning-toggle">
      <Toggle toggle={veilederToggle} onChange={toggleBrukerVisning} venstreTekst="Veileder" hoyreTekst="Bruker" />
    </div>
  );
};

export default BrukerVisningsToggle;
