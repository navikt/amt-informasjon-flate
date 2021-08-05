import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface KategoriFilterState {
  aktiveKategoriFilter: Array<string>;
}

const initialState: KategoriFilterState = { aktiveKategoriFilter: [] };

const KategoriFilter = createSlice({
  name: 'kategoriFilter',
  initialState,
  reducers: {
    velgKategoriFilter: (state, action: PayloadAction<string>) => {
      const index = state.aktiveKategoriFilter.findIndex(filter => filter === action.payload);
      index < 0 ? state.aktiveKategoriFilter.push(action.payload) : state.aktiveKategoriFilter.splice(index, 1);
    },
  },
});

export const { velgKategoriFilter } = KategoriFilter.actions;

export default KategoriFilter.reducer;
