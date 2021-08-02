import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StedFilterState {
  aktiveRegionerFilter: Array<string>;
  aktiveKommunerFilter: Array<string>;
}

const initialState: StedFilterState = { aktiveRegionerFilter: [], aktiveKommunerFilter: [] };

const StedFilter = createSlice({
  name: 'stedFilter',
  initialState,
  reducers: {
    toggleRegionFilter: (state, action: PayloadAction<string>) => {
      //TODO fjerne filter på kommuner som tilhører regionen når man fjerner filter på regionen
      const index = state.aktiveRegionerFilter.findIndex(filter => filter === action.payload);
      index < 0 ? state.aktiveRegionerFilter.push(action.payload) : state.aktiveRegionerFilter.splice(index, 1);
    },
    toggleKommuneFilter: (state, action: PayloadAction<string>) => {
      const index = state.aktiveKommunerFilter.findIndex(filter => filter === action.payload);
      index < 0 ? state.aktiveKommunerFilter.push(action.payload) : state.aktiveKommunerFilter.splice(index, 1);
    },
  },
});

export const { toggleRegionFilter, toggleKommuneFilter } = StedFilter.actions;

export default StedFilter.reducer;
