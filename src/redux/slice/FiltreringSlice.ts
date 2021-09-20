import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  tiltakstype: string[];
  sokefelt: string;
}

const initialState: FilterState = {
  tiltakstype: [],
  sokefelt: '',
};

const Filtrering = createSlice({
  name: 'filtrering',
  initialState,
  reducers: {
    velgTiltakstype: (state, action: PayloadAction<string>) => {
      const index = state.tiltakstype.findIndex(filter => filter === action.payload);
      index < 0 ? state.tiltakstype.push(action.payload) : state.tiltakstype.splice(index, 1);
    },
    skrivSokefelt: (state, action: PayloadAction<string>) => {
      state.sokefelt = action.payload;
    },
  },
});

export const { velgTiltakstype, skrivSokefelt } = Filtrering.actions;

export default Filtrering.reducer;
