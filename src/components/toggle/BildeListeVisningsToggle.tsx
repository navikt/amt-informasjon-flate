import Toggle from './Toggle';
import React from 'react';
import { useSelector } from 'react-redux';
import { toggleBildeListeVisning } from '../../redux/slice/ToggleSlice';

const BildeListeVisningsToggle = () => {
  const bildeListeToggle = useSelector((state: any) => state.toggleReducer.bildeListeVisning);
  return (
    <div className="bildelistevisning__toggle">
      <Toggle
        toggle={bildeListeToggle}
        onChange={toggleBildeListeVisning}
        venstreTekst="Bildevisning"
        hoyreTekst="Listevisning"
      />
    </div>
  );
};

export default BildeListeVisningsToggle;
