import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import { formatering } from '../../../utils/Utils';
import AlertStripe from 'nav-frontend-alertstriper';
import NavFrontendSpinner from 'nav-frontend-spinner';

interface DropDownFilterProps {
  data: Array<string>;
  onChange: (filter: string) => void;
  tittel: string;
  isLoading: React.ReactNode;
}

const DropdownFilter = ({ onChange, tittel, data, isLoading }: DropDownFilterProps) => {
  const className = 'custom__ekspanderbartpanel';

  if (isLoading) {
    return <NavFrontendSpinner />;
  } else if (data) {
    return (
      <div>
        <Ekspanderbartpanel renderContentWhenClosed={true} tittel={tittel} className={className}>
          {data.map((filtreringsmulighet, index) => (
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
  }

  return (
    <div>
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={tittel} className={className}>
        <AlertStripe type="feil">Feil i systemet</AlertStripe>
      </Ekspanderbartpanel>
    </div>
  );
};

export default DropdownFilter;
