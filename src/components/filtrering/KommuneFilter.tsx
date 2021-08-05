import React from 'react';
import { Checkbox } from 'nav-frontend-skjema';
import { useDispatch, useSelector } from 'react-redux';
import { oppdaterKommuneFilter } from '../../redux/filtreringer/StedFilterSlice';

interface KommuneFilterProps {
  kommune: string;
}

const KommuneFilter = ({ kommune }: KommuneFilterProps) => {
  const dispatch = useDispatch();

  const aktiveKommuneFiltere = useSelector((state: any) => state.stedFilterReducer.aktiveKommunerFilter);

  return (
    <Checkbox
      checked={aktiveKommuneFiltere.includes(kommune)}
      label={kommune}
      value={kommune}
      className="ekspanderbartpanel__checkbox"
      onChange={() => dispatch(oppdaterKommuneFilter(kommune))}
    />
  );
};

export default KommuneFilter;
