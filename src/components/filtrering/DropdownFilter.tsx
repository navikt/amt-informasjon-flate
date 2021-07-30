import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import React, { useState } from 'react';

interface DropDownFilterProps {
  filtreringsmuligheter: Array<string>;
  onChange: (filter: string) => void;
  tittel: string;
  style?: React.CSSProperties;
}

const DropdownFilter = ({ filtreringsmuligheter, onChange, tittel, style }: DropDownFilterProps) => {
  return (
    <div>
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={tittel} className="dropdownFilter" style={style}>
        {filtreringsmuligheter.map((filtreringsmulighet, index) => (
          <Checkbox
            label={filtreringsmulighet}
            value={filtreringsmulighet}
            key={index}
            className="dropdownCheckbox"
            onChange={() => onChange(filtreringsmulighet)}
          />
        ))}
      </Ekspanderbartpanel>
    </div>
  );
};

export default DropdownFilter;
