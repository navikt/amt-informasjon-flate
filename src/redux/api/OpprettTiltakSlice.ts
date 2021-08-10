import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TiltakState {
  id: string;
  tittel: String;
  beskrivelse: String;
}

export interface TiltakArrayState {
  tiltaksliste: Array<TiltakState>;
  loading: boolean;
  error: string | null;
}

const initialState: TiltakArrayState = { tiltaksliste: [], error: null, loading: false };

export const tiltaklisteSlice = createSlice({
  name: 'tiltak',
  initialState,
  reducers: {
    leggTilTiltakLoading: state => {
      state.loading = true;
      state.error = null;
    },
    leggTilTiltakSuccess: (state, action: PayloadAction<TiltakState>) => {
      state.tiltaksliste.push({ ...action.payload, id: (state.tiltaksliste.length + 1).toString() });
      state.loading = false;
    },
    leggTilTiltakError: state => {
      state.loading = false;
      state.error = 'Det har skjedd en teknisk feil';
    },
    fjernTiltak: (state, action: PayloadAction<string>) => {
      const index = state.tiltaksliste.findIndex(tiltak => tiltak.id === action.payload);
      state.tiltaksliste.splice(index, 1);
    },
  },
});

export const { fjernTiltak } = tiltaklisteSlice.actions;

export default tiltaklisteSlice.reducer;
