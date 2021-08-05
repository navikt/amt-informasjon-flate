import React from 'react';
import { Checkbox } from 'nav-frontend-skjema';
import { useDispatch, useSelector } from 'react-redux';
import { toggleRegionFilter } from '../../redux/filtreringer/StedFilterSlice';
import tilhorendeKommuner from '../../data/geografi';
import KommuneFilter from './KommuneFilter';
import './Filtrering.less';

interface RegionFilterProps {
  region: string;
}

const RegionFilter = ({ region }: RegionFilterProps) => {
  const dispatch = useDispatch();
  const oppdaterRegionFilter = (region: string) => {
    dispatch(toggleRegionFilter(region));
  };

  const aktiveRegionerFiltere = useSelector((state: any) => state.stedFilterReducer.aktiveRegionerFilter);

  return (
    <>
      <Checkbox
        label={region}
        value={region}
        checked={aktiveRegionerFiltere.includes(region)}
        className="ekspanderbartpanel__checkbox"
        onChange={() => oppdaterRegionFilter(region)}
      />
      <div
        style={{ display: aktiveRegionerFiltere.includes(region) ? 'block' : 'none' }}
        className="innrykket-checkbox"
      >
        {tilhorendeKommuner.get(region)?.map((kommune, kommuneIndex) => (
          <KommuneFilter kommune={kommune} key={kommuneIndex} />
        ))}
      </div>
    </>
  );
};

export default RegionFilter;
