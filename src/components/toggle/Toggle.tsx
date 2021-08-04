import React from 'react';
import './Toggle.less';
import classNames from 'classnames';

export interface ToggleProps {
  onChange: () => void;
  venstreTekst: string;
  hoyreTekst: string;
  className?: string;
}

const Toggle = ({ onChange, venstreTekst, hoyreTekst, className }: ToggleProps) => {
  return (
    <div className={classNames('switch-button', className)}>
      <input className="switch-button-checkbox" type="checkbox" onChange={onChange} id="switch-button" />
      <label className="switch-button-label" htmlFor="switch-button">
        <span className="switch-button_venstre-tekst">{venstreTekst}</span>
      </label>
      <label>
        <span className="switch-button_hoyre-tekst">{hoyreTekst}</span>
      </label>
    </div>
  );
};

export default Toggle;
