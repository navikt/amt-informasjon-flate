import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import FylkeFilter from './FylkeFilter';
import { regioner } from '../../../utils/Geografi';

const StedFilter = () => {
  return (
    <div className="omrade__filter">
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={'Velg område'} className={'stedsfilter'}>
        {regioner.map((region, index) => (
          <FylkeFilter fylke={region} key={index} />
        ))}
      </Ekspanderbartpanel>
    </div>
  );
};

export default StedFilter;
