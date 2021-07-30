import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import React from 'react';

interface DropDownFilterProps {
  filtreringsmuligheter: Array<string>;
  onChange: (filter: string) => void;
  tittel: string;
}

const DropdownFilter = ({ filtreringsmuligheter, onChange, tittel }: DropDownFilterProps) => {
  return (
    <>
      <Ekspanderbartpanel
        renderContentWhenClosed={true}
        tittel={tittel}
        className="dropdownFilter"
        style={{ background: 'rgba(179, 193, 0, 0.4)' }}
      >
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
    </>
  );
};

export default DropdownFilter;
