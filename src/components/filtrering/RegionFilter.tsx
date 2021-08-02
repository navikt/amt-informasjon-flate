import { Checkbox } from 'nav-frontend-skjema';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const [erRegionenAktiv, setErRegionenAktiv] = useState<boolean>(false);

  const onChange = () => {
    setErRegionenAktiv(!erRegionenAktiv);
    oppdaterRegionFilter(region);
  };

  return (
    <>
      <Checkbox label={region} value={region} className="ekspanderbartpanel_checkbox" onChange={onChange} />
      <div style={{ display: erRegionenAktiv ? 'block' : 'none' }} className="innrykket_checkbox">
        {tilhorendeKommuner.get(region)?.map((kommune, kommuneIndex) => (
          <KommuneFilter kommune={kommune} key={kommuneIndex} />
        ))}
      </div>
    </>
  );
};

export default RegionFilter;
