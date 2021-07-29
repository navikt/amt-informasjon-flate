import { createSlice } from '@reduxjs/toolkit';

export interface ToggleVisningState {
  veiledervisning: boolean;
}

const initialState: ToggleVisningState = { veiledervisning: true };

export const visningstoggle = createSlice({
  name: 'visningstoggle',
  initialState,
  reducers: {
    toggleVisning: state => {
      state.veiledervisning = !state.veiledervisning;
    },
  },
});

export const { toggleVisning } = visningstoggle.actions;

export default visningstoggle.reducer;
