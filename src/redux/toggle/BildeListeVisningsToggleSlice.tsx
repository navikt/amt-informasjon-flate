import { createSlice } from '@reduxjs/toolkit';

export interface ToggleBildeListeVisningState {
  bildeListeVisning: boolean;
}

const initialState: ToggleBildeListeVisningState = { bildeListeVisning: true };

export const bildeListeVisningsToggle = createSlice({
  name: 'bildeListeVisningsToggle',
  initialState,
  reducers: {
    toggleBildeListeVisning: state => {
      state.bildeListeVisning = !state.bildeListeVisning;
    },
  },
});

export const { toggleBildeListeVisning } = bildeListeVisningsToggle.actions;

export default bildeListeVisningsToggle.reducer;
