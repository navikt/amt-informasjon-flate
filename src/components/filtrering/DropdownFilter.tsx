import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import React from 'react';

interface DropDownFilterProps {
  filtreringsmuligheter: Array<string>;
  onChange: (filter: string) => void;
  tittel: string;
  style?: React.CSSProperties;
  className: string;
}

const DropdownFilter = ({ filtreringsmuligheter, onChange, tittel, style, className }: DropDownFilterProps) => {
  return (
    <div>
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={tittel} className={className} style={style}>
        {filtreringsmuligheter.map((filtreringsmulighet, index) => (
          <Checkbox
            label={filtreringsmulighet}
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
