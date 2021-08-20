import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import regionerMedKommuner from '../../utils/Geografi';

interface FilterState {
  fylke: string[];
  kommune: string[];
  kategori: string[];
  tiltakstype: string[];
  innsatsgrupper: string[];
}

const initialState: FilterState = {
  fylke: [],
  kommune: [],
  kategori: [],
  tiltakstype: [],
  innsatsgrupper: [],
};

const Filtrering = createSlice({
  name: 'filtrering',
  initialState,
  reducers: {
    velgFylke: (state: FilterState = initialState, action: PayloadAction<string>) => {
      const index = state.fylke.findIndex(filter => filter === action.payload);
      index < 0 ? state.fylke.push(action.payload) : state.fylke.splice(index, 1);

      //fjerner filter på kommune hvis regionen fjernes
      const tilhorendeKommuner = regionerMedKommuner.get(action.payload);
      tilhorendeKommuner?.forEach(kommune => {
        const kommuneIndex = state.kommune.indexOf(kommune);
        if (kommuneIndex >= 0) state.kommune.splice(kommuneIndex, 1);
      });
    },
    velgKommune: (state, action: PayloadAction<string>) => {
      const index = state.kommune.findIndex(filter => filter === action.payload);
      index < 0 ? state.kommune.push(action.payload) : state.kommune.splice(index, 1);
    },
    velgKategori: (state, action: PayloadAction<string>) => {
      const index = state.kategori.findIndex(filter => filter === action.payload);
      index < 0 ? state.kategori.push(action.payload) : state.kategori.splice(index, 1);
    },
    velgTiltakstype: (state, action: PayloadAction<string>) => {
      const index = state.tiltakstype.findIndex(filter => filter === action.payload);
      index < 0 ? state.tiltakstype.push(action.payload) : state.tiltakstype.splice(index, 1);
    },
    velgInnsatsgruppe: (state, action: PayloadAction<string>) => {
      const index = state.innsatsgrupper.findIndex(filter => filter === action.payload);
      index < 0 ? state.innsatsgrupper.push(action.payload) : state.innsatsgrupper.splice(index, 1);
    },
  },
});

export const { velgFylke, velgKommune, velgKategori, velgTiltakstype, velgInnsatsgruppe } = Filtrering.actions;

export default Filtrering.reducer;
