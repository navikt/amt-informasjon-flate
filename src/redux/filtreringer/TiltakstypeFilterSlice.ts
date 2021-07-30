import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TiltakstypeFilterState {
  aktiveTiltakstypeFilter: Array<string>;
}

const initialState: TiltakstypeFilterState = { aktiveTiltakstypeFilter: [] };

const TiltakstypeFilter = createSlice({
  name: 'tiltakstypeFilter',
  initialState,
  reducers: {
    toggleTiltakstypeFilter: (state, action: PayloadAction<string>) => {
      const index = state.aktiveTiltakstypeFilter.findIndex(filter => filter === action.payload);
      index < 0 ? state.aktiveTiltakstypeFilter.push(action.payload) : state.aktiveTiltakstypeFilter.splice(index, 1);
    },
  },
});

export const { toggleTiltakstypeFilter } = TiltakstypeFilter.actions;

export default TiltakstypeFilter.reducer;
