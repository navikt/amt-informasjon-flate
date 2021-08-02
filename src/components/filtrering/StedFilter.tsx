import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import RegionFilter from './RegionFilter';
import { regioner } from '../../data/geografi';

const StedFilter = () => {
  return (
    <>
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={'Velg NAV region'} className={'stedsfilter'}>
        {regioner.map((region, index) => (
          <RegionFilter region={region} key={index} />
        ))}
      </Ekspanderbartpanel>
    </>
  );
};

export default StedFilter;
