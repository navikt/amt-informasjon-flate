import React from 'react';
import { Checkbox } from 'nav-frontend-skjema';
import { useDispatch, useSelector } from 'react-redux';
import tilhorendeKommuner from '../../data/Geografi';
import KommuneFilter from './KommuneFilter';
import './Filtrering.less';
import { velgFylkeFilter } from '../../redux/filtreringer/FiltreringSlice';

interface FylkeFilterProps {
  fylke: string;
}

const FylkeFilter = ({ fylke }: FylkeFilterProps) => {
  const dispatch = useDispatch();

  const aktiveFylkeFiltere = useSelector((state: any) => state.filterReducer.fylke);

  return (
    <>
      <Checkbox
        label={fylke}
        value={fylke}
        checked={aktiveFylkeFiltere.includes(fylke)}
        className="ekspanderbartpanel__checkbox"
        onChange={() => dispatch(velgFylkeFilter(fylke))}
      />
      <div style={{ display: aktiveFylkeFiltere.includes(fylke) ? 'block' : 'none' }} className="innrykket-checkbox">
        {tilhorendeKommuner.get(fylke)?.map((kommune, kommuneIndex) => (
          <KommuneFilter kommune={kommune} key={kommuneIndex} />
        ))}
      </div>
    </>
  );
};

export default FylkeFilter;
