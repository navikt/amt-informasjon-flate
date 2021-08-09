import { toggleBrukerVisning } from '../../redux/toggle/BrukerVisningsToggleSlice';
import Toggle from './Toggle';
import React from 'react';
import { useSelector } from 'react-redux';
import '../toppMeny/ToppMeny.less';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { PopoverOrientering } from 'nav-frontend-popover';

interface BrukerVisningsToggleProps {
  className: string;
}

const BrukerVisningsToggleForside = ({ className }: BrukerVisningsToggleProps) => {
  const veilederToggle = useSelector((state: any) => state.brukerVisningsReducer.brukerVisning);
  const id = 'veiledervisning';

  return (
    <div className={className}>
      <Toggle toggle={veilederToggle} onChange={toggleBrukerVisning} venstreTekst="Veileder" hoyreTekst="Bruker"  id={id}/>
        <Hjelpetekst type={PopoverOrientering.UnderHoyre} aria-labelledby={id}>
            Denne knappen lar deg enkelt bytte mellom veileder og bruker sitt perspektiv
        </Hjelpetekst>
    </div>
  );
};

export default BrukerVisningsToggleForside;
