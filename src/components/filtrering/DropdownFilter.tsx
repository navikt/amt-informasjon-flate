import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import { formatering } from '../../utils/Utils';

interface DropDownFilterProps {
  filtreringsmuligheter: Array<string>;
  onChange: (filter: string) => void;
  tittel: string;
  className: string;
}

const DropdownFilter = ({ filtreringsmuligheter, onChange, tittel, className }: DropDownFilterProps) => {
  return (
    <div>
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={tittel} className={className}>
        {filtreringsmuligheter.map((filtreringsmulighet, index) => (
          <Checkbox
            label={formatering(filtreringsmulighet)}
            value={filtreringsmulighet}
            key={index}
            className="ekspanderbartpanel__checkbox"
            onChange={() => onChange(filtreringsmulighet)}
          />
        ))}
      </Ekspanderbartpanel>
    </div>
  );
};

export default DropdownFilter;
