import React from 'react';
import { Checkbox } from 'nav-frontend-skjema';
import { useDispatch, useSelector } from 'react-redux';
import KommuneFilter from './KommuneFilter';
import '../Filtrering.less';
import { Region } from '../../../domain/Domain';
import { velgRegion } from '../../../redux/slice/FiltreringSlice';

interface RegionFilterProps {
  region: Region;
}

const RegionFilter = ({ region }: RegionFilterProps) => {
  const dispatch = useDispatch();
  const aktiveRegionFiltere = useSelector((state: any) => state.filterReducer.region);

  return (
    <>
      <Checkbox
        label={region.navn}
        value={region.navn}
        checked={aktiveRegionFiltere.includes(region)}
        className="ekspanderbartpanel__checkbox"
        onChange={() => {
          dispatch(velgRegion(region));
        }}
      />
      {aktiveRegionFiltere.includes(region) && (
        <div className="innrykket-checkbox">
          {region.kommuner.map((kommune, kommuneIndex) => {
            return <KommuneFilter kommune={kommune} key={kommuneIndex} />;
          })}
        </div>
      )}
    </>
  );
};

export default RegionFilter;