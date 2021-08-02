import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleKommuneFilter, toggleRegionFilter } from '../../redux/filtreringer/StedFilterSlice';
import DropdownFilter from './DropdownFilter';

const StedFilter = () => {
  const dispatch = useDispatch();

  const navregioner: Array<string> = ['Oslo', 'Viken', 'Agder']; //må hentes fra et sted
  const kommuner: Array<string> = ['Oslo', 'Moss', 'Nordre Follo', 'Trondheim', 'Ås']; // må hentes et sted og filtreres basert på hvilken region som er valgt

  const oppdaterRegionFiltere = (region: string) => {
    dispatch(toggleRegionFilter(region));
  };

  const oppdaterKommuneFilter = (kommune: string) => {
    dispatch(toggleKommuneFilter(kommune));
  };

  return (
    <>
      <DropdownFilter
        filtreringsmuligheter={navregioner}
        tittel="Velg Nav region"
        onChange={oppdaterRegionFiltere}
        className="stedsfilter"
      />
      <DropdownFilter
        filtreringsmuligheter={kommuner}
        tittel="Velg kommune"
        onChange={oppdaterKommuneFilter}
        className="stedsfilter"
      />
    </>
  );
};

export default StedFilter;
