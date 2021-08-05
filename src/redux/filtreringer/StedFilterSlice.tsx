import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import regionerMedKommuner from '../../data/Geografi';

export interface StedFilterState {
  aktiveRegionerFilter: Array<string>;
  aktiveKommunerFilter: Array<string>;
}

const initialState: StedFilterState = { aktiveRegionerFilter: [], aktiveKommunerFilter: [] };

const StedFilter = createSlice({
  name: 'stedFilter',
  initialState,
  reducers: {
    oppdaterRegionFilter: (state, action: PayloadAction<string>) => {
      const index = state.aktiveRegionerFilter.findIndex(filter => filter === action.payload);
      index < 0 ? state.aktiveRegionerFilter.push(action.payload) : state.aktiveRegionerFilter.splice(index, 1);

      //fjerner filter på kommune hvis regionen fjernes
      const tilhorendeKommuner = regionerMedKommuner.get(action.payload);
      tilhorendeKommuner?.forEach(kommune => {
        const kommuneIndex = state.aktiveKommunerFilter.indexOf(kommune);
        if (kommuneIndex >= 0) state.aktiveKommunerFilter.splice(kommuneIndex, 1);
      });
    },
    oppdaterKommuneFilter: (state, action: PayloadAction<string>) => {
      const index = state.aktiveKommunerFilter.findIndex(filter => filter === action.payload);
      index < 0 ? state.aktiveKommunerFilter.push(action.payload) : state.aktiveKommunerFilter.splice(index, 1);
    },
  },
});

export const { oppdaterRegionFilter, oppdaterKommuneFilter } = StedFilter.actions;

export default StedFilter.reducer;
