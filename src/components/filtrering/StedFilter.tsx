import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import RegionFilter from './RegionFilter';
import { regioner } from '../../data/geografi';

const StedFilter = () => {
  return (
    <div className="omrade__filter">
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={'Velg område'} className={'stedsfilter'}>
        {regioner.map((region, index) => (
          <RegionFilter region={region} key={index} />
        ))}
      </Ekspanderbartpanel>
    </div>
  );
};

export default StedFilter;
