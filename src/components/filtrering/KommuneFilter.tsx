import { Checkbox } from 'nav-frontend-skjema';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleKommuneFilter } from '../../redux/filtreringer/StedFilterSlice';

interface KommuneFilterProps {
  kommune: string;
}

const KommuneFilter = ({ kommune }: KommuneFilterProps) => {
  const dispatch = useDispatch();
  const oppdaterKommuneFilter = (kommune: string) => {
    dispatch(toggleKommuneFilter(kommune));
  };

  return (
    <>
      <Checkbox
        label={kommune}
        value={kommune}
        className="ekspanderbartpanel_checkbox"
        onChange={() => oppdaterKommuneFilter(kommune)}
      />
    </>
  );
};

export default KommuneFilter;
