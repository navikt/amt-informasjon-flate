import React from 'react';
import './Toggle.less';
import { useDispatch } from 'react-redux';

export interface ToggleProps {
  toggle: boolean;
  onChange: () => void;
  venstreTekst: string;
  hoyreTekst: string;
}

const Toggle = (props: ToggleProps) => {
  const dispatch = useDispatch();
  return (
    <div className="switch-button">
      <input
        className="switch-button-checkbox"
        type="checkbox"
        onChange={() => dispatch(props.onChange)}
        id="switch-button"
      />
      <label className="switch-button-label" htmlFor="switch-button">
        <span className="switch-button_venstre-tekst">{props.venstreTekst}</span>
      </label>
      <label>
        <span className="switch-button_hoyre-tekst">{props.hoyreTekst}</span>
      </label>
    </div>
  );
};

export default Toggle;
