import { toggleVisning } from '../../redux/VisningsToggleSlice';
import Toggle from './Toggle';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ToggleController = () => {
  const dispatch = useDispatch();
  const veilederToggle = useSelector((state: any) => state.visningsToggle.veiledervisning);

  useEffect(() => {
    const veilederTekst = document.querySelector<HTMLElement>('.switch-button_venstre-tekst')!;
    const brukerTekst = document.querySelector<HTMLElement>('.switch-button_hoyre-tekst')!;

    if (veilederToggle) {
      veilederTekst.style.color = 'white';
      veilederTekst.style.transitionDuration = '0.5s';
      brukerTekst.style.color = 'black';
      brukerTekst.style.transitionDuration = '0.5s';
    } else {
      veilederTekst.style.color = 'black';
      veilederTekst.style.transitionDuration = '0.5s';
      brukerTekst.style.color = 'white';
      brukerTekst.style.transitionDuration = '0.5s';
    }
  }, [veilederToggle]);

  return (
    <Toggle
      toggle={veilederToggle}
      onChange={() => dispatch(toggleVisning())}
      venstreTekst="Veileder"
      hoyreTekst="Bruker"
    />
  );
};

export default ToggleController;
