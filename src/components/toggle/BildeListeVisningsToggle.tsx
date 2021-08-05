import Toggle from './Toggle';
import React from 'react';
import { useSelector } from 'react-redux';
import { toggleBildeListeVisning } from '../../redux/toggle/BildeListeVisningsToggleSlice';

const BildeListeVisningsToggle = () => {
  const bildeListeToggle = useSelector((state: any) => state.bildeListeVisningsReducer.bildeListeVisning);
  return (
    <div className="bildelistevisning-toggle">
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
