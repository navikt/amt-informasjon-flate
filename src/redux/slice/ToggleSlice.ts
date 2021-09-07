import { createSlice } from '@reduxjs/toolkit';

export interface ToggleState {
  bildeListeVisning: boolean;
  brukerVisning: boolean;
}

const initialState: ToggleState = { bildeListeVisning: true, brukerVisning: true };

export const toggle = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleBildeListeVisning: state => {
      state.bildeListeVisning = !state.bildeListeVisning;
    },
    toggleBrukerVisning: state => {
      state.brukerVisning = !state.brukerVisning;
    },
  },
});

export const { toggleBildeListeVisning, toggleBrukerVisning } = toggle.actions;

export default toggle.reducer;
