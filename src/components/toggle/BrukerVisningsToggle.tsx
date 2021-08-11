import Toggle from './Toggle';
import React from 'react';
import { useSelector } from 'react-redux';
import '../toppMeny/ToppMeny.less';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { PopoverOrientering } from 'nav-frontend-popover';
import { toggleBrukerVisning } from '../../redux/slice/ToggleSlice';

interface BrukerVisningsToggleProps {
  className: string;
}

const BrukerVisningsToggle = ({ className }: BrukerVisningsToggleProps) => {
  const brukervisningsToggle = useSelector((state: any) => state.toggleReducer.brukerVisning);
  const id = 'brukervisning';

  return (
    <div className={className}>
      <Toggle
        toggle={brukervisningsToggle}
        onChange={toggleBrukerVisning}
        venstreTekst="Veileder"
        hoyreTekst="Bruker"
        id={id}
      />
      <Hjelpetekst type={PopoverOrientering.UnderHoyre} aria-labelledby={id}>
        Denne knappen lar deg enkelt bytte mellom veileder og bruker sitt perspektiv
      </Hjelpetekst>
    </div>
  );
};

export default BrukerVisningsToggle;
