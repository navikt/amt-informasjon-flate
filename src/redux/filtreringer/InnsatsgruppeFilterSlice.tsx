import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InnsatsgruppeFilterState {
  aktiveInnsatsgruppeFilter: Array<string>;
}

const initialState: InnsatsgruppeFilterState = { aktiveInnsatsgruppeFilter: [] };

const InnsatsgruppeFilter = createSlice({
  name: 'innsatsgruppeFilter',
  initialState,
  reducers: {
    toggleInnsatsgruppeFilter: (state, action: PayloadAction<string>) => {
      const index = state.aktiveInnsatsgruppeFilter.findIndex(filter => filter === action.payload);
      index < 0
        ? state.aktiveInnsatsgruppeFilter.push(action.payload)
        : state.aktiveInnsatsgruppeFilter.splice(index, 1);
    },
  },
});

export const { toggleInnsatsgruppeFilter } = InnsatsgruppeFilter.actions;

export default InnsatsgruppeFilter.reducer;
