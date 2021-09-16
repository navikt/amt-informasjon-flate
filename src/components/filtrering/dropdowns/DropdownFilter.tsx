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
  isSuccess: React.ReactNode;
  isError: React.ReactNode | unknown;
}

const DropdownFilter = ({ onChange, tittel, data, isLoading, isError, isSuccess }: DropDownFilterProps) => {
  const className = 'custom__ekspanderbartpanel';

  return (
    <div className={`ekspanderbartpanel__${tittel.toLocaleLowerCase().split(' ').join('-')}`}>
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={tittel} className={className}>
        {isLoading && <NavFrontendSpinner />}

        {isSuccess &&
          data.map((filtreringsmulighet, index) => (
            <Checkbox
              label={stringFormatting(filtreringsmulighet)}
              value={filtreringsmulighet}
              key={index}
              className="ekspanderbartpanel__checkbox"
              onChange={() => onChange(filtreringsmulighet)}
            />
          ))}

        {isError && <AlertStripe type="feil">Feil i systemet</AlertStripe>}
      </Ekspanderbartpanel>
    </div>
  );
};

export default DropdownFilter;
