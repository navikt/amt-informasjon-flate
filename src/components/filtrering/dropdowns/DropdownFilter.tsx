import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import { stringFormatting } from '../../../utils/Utils';
import AlertStripe from 'nav-frontend-alertstriper';
import NavFrontendSpinner from 'nav-frontend-spinner';

interface DropDownFilterProps {
  data: Array<string>;
  onChange: (filter: string) => void;
  tittel: string;
  isLoading: React.ReactNode;
  error: React.ReactNode | unknown;
}

const DropdownFilter = ({ onChange, tittel, data, isLoading, error }: DropDownFilterProps) => {
  const className = 'custom__ekspanderbartpanel';

  return (
    <div>
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={tittel} className={className}>
        {isLoading && <NavFrontendSpinner />}

        {data &&
          data.map((filtreringsmulighet, index) => (
            <Checkbox
              label={stringFormatting(filtreringsmulighet)}
              value={filtreringsmulighet}
              key={index}
              className="ekspanderbartpanel__checkbox"
              onChange={() => onChange(filtreringsmulighet)}
            />
          ))}
        {error && <AlertStripe type="feil">Feil i systemet</AlertStripe>}
      </Ekspanderbartpanel>
    </div>
  );
};

export default DropdownFilter;
