import { createSlice } from '@reduxjs/toolkit';

export interface ToggleBrukerVisningState {
  brukerVisning: boolean;
}

const initialState: ToggleBrukerVisningState = { brukerVisning: true };

export const brukerVisningsToggle = createSlice({
  name: 'brukerVisningsToggle',
  initialState,
  reducers: {
    toggleBrukerVisning: state => {
      state.brukerVisning = !state.brukerVisning;
    },
  },
});

export const { toggleBrukerVisning } = brukerVisningsToggle.actions;

export default brukerVisningsToggle.reducer;
