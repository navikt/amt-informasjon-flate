import React from 'react';
import { Checkbox } from 'nav-frontend-skjema';
import { useDispatch, useSelector } from 'react-redux';
import { velgKommuneFilter } from '../../redux/filtreringer/FiltreringSlice';

interface KommuneFilterProps {
  kommune: string;
}

const KommuneFilter = ({ kommune }: KommuneFilterProps) => {
  const dispatch = useDispatch();

  const aktiveKommuneFiltere = useSelector((state: any) => state.filterReducer.kommune);

  return (
    <Checkbox
      checked={aktiveKommuneFiltere.includes(kommune)}
      label={kommune}
      value={kommune}
      className="ekspanderbartpanel__checkbox"
      onChange={() => dispatch(velgKommuneFilter(kommune))}
    />
  );
};

export default KommuneFilter;
