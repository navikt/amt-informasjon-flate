import React from 'react';
import { useQuery } from 'react-query';
import AlertStripe from 'nav-frontend-alertstriper';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Region } from '../../domain/domain';
import RegionFilter from './RegionFilter';

const StedFilter = () => {
  const { isLoading, data, error } = useQuery('regioner', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/regioner').then(res => res.json())
  );
  const regioner: Region[] | undefined = data;

  return (
    <div className="omrade__filter">
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel={'Velg område'} className={'stedsfilter'}>
        {isLoading && <NavFrontendSpinner />}
        {regioner && regioner.map((region, index) => <RegionFilter region={region} key={index} />)}
        {error && (
          <AlertStripe type="feil" className="tiltak__alert-stripe__wrapper">
            {'Teknisk feil'}
          </AlertStripe>
        )}
      </Ekspanderbartpanel>
    </div>
  );
};

export default StedFilter;
