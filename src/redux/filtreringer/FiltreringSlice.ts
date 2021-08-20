import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Kommune, Region } from '../../domain/domain';

interface FilterState {
  region: Region[];
  kommuner: Kommune[];
  kategori: string[];
  tiltakstype: string[];
  innsatsgrupper: string[];
}

const initialState: FilterState = {
  region: [],
  kommuner: [],
  kategori: [],
  tiltakstype: [],
  innsatsgrupper: [],
};

const Filtrering = createSlice({
  name: 'filtrering',
  initialState,
  reducers: {
    velgRegion: (state: FilterState = initialState, action: PayloadAction<Region>) => {
      const selectedRegion: Region = action.payload;
      const index = state.region.findIndex(filter => filter.id === selectedRegion.id);
      index < 0 ? state.region.push(selectedRegion) : state.region.splice(index, 1);

      //fjerner filter på kommune hvis regionen fjernes
      const tilhorendeKommuner = selectedRegion.kommuner;
      tilhorendeKommuner?.forEach(kommune => {
        const kommuneIndex = state.kommuner.findIndex(filter => filter.id === kommune.id);
        if (kommuneIndex >= 0) state.kommuner.splice(kommuneIndex, 1);
      });
    },
    velgKommune: (state, action: PayloadAction<Kommune>) => {
      const selectedKommune: Kommune = action.payload;
      const index = state.kommuner.findIndex(filter => filter.id === selectedKommune.id);
      index < 0 ? state.kommuner.push(selectedKommune) : state.kommuner.splice(index, 1);
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

export const { velgRegion, velgKommune, velgKategori, velgTiltakstype, velgInnsatsgruppe } = Filtrering.actions;

export default Filtrering.reducer;
