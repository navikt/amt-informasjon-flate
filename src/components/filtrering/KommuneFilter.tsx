import React from 'react';
import { Checkbox } from 'nav-frontend-skjema';
import { useDispatch, useSelector } from 'react-redux';
import { toggleKommuneFilter } from '../../redux/filtreringer/StedFilterSlice';

interface KommuneFilterProps {
  kommune: string;
}

const KommuneFilter = ({ kommune }: KommuneFilterProps) => {
  const dispatch = useDispatch();
  const oppdaterKommuneFilter = (kommune: string) => {
    dispatch(toggleKommuneFilter(kommune));
  };

  const aktiveKommuneFiltere = useSelector((state: any) => state.stedFilterReducer.aktiveKommunerFilter);

  return (
    <Checkbox
      checked={aktiveKommuneFiltere.includes(kommune)}
      label={kommune}
      value={kommune}
      className="ekspanderbartpanel__checkbox"
      onChange={() => oppdaterKommuneFilter(kommune)}
    />
  );
};

export default KommuneFilter;
