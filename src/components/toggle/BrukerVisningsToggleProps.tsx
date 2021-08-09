import { toggleBrukerVisning } from '../../redux/toggle/BrukerVisningsToggleSlice';
import Toggle from './Toggle';
import React from 'react';
import { useSelector } from 'react-redux';
import '../toppMeny/ToppMeny.less';

interface BrukerVisningsToggleProps {
  className: string;
}

const BrukerVisningsToggleForside = ({ className }: BrukerVisningsToggleProps) => {
  const veilederToggle = useSelector((state: any) => state.brukerVisningsReducer.brukerVisning);

  return (
    <div className={className}>
      <Toggle toggle={veilederToggle} onChange={toggleBrukerVisning} venstreTekst="Veileder" hoyreTekst="Bruker" />
    </div>
  );
};

export default BrukerVisningsToggleForside;
