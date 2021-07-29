import React from 'react';
import './Toggle.less';

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
}

const Toggle = (props: ToggleProps) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
      id="dmcheck"
      aria-label="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
