import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import RegionFilter from './RegionFilter';
import { regioner } from '../../data/geografi';

const StedFilter = () => {
  return (
    <>
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={'Velg NAV region'} className={'stedsfilter'}>
        {regioner.map((region, index) => (
          /*<div>
            <Checkbox
              label={region}
              value={region}
              key={index}
              className="ekspanderbartpanel_checkbox"
              onChange={() => oppdaterRegionFilter(region)}
            />
            <div>
              {tilhorendeKommuner.get(region)?.map((kommune, kommuneIndex) => (
                <KommuneFilter kommune={kommune} key={kommuneIndex} />
              ))}
            </div>
          </div>
          */
          <RegionFilter region={region} key={index} />
        ))}
      </Ekspanderbartpanel>
    </>
  );
};

export default StedFilter;
