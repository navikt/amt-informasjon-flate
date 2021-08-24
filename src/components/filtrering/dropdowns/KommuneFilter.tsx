import React from 'react';
import { Checkbox } from 'nav-frontend-skjema';
import { useDispatch, useSelector } from 'react-redux';
import { velgKommune } from '../../redux/filtreringer/FiltreringSlice';
import { Kommune } from '../../domain/domain';

interface KommuneFilterProps {
  kommune: Kommune;
}

const KommuneFilter = ({ kommune }: KommuneFilterProps) => {
  const dispatch = useDispatch();

  const aktiveKommunerFiltere = useSelector((state: any) => state.filterReducer.kommuner);

  return (
    <Checkbox
      checked={aktiveKommunerFiltere.includes(kommune)}
      label={kommune.navn}
      value={kommune.navn}
      className="ekspanderbartpanel__checkbox"
      onChange={() => dispatch(velgKommune(kommune))}
    />
  );
};

export default KommuneFilter;
