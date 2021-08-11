import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TiltakstyperState {
  tiltakstype: string;
  loading: boolean;
  error: string | null;
}

const initialState: TiltakstyperState = { tiltakstype: '', loading: false, error: null };

const hentAlleTiltakstyperFraDB = (setTiltakstyper: (value: []) => void) => {
  fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/typer')
    .then(res => res.json())
    .then(data => setTiltakstyper(data));
};

export const tiltakstyperSlice = createSlice({
  name: 'tiltakstyper',
  initialState,
  reducers: {
    hentTiltakstyperLoading: state => {
      state.loading = true;
      state.error = null;
    },
    hentTiltakstyperSuccess: (state, action: PayloadAction<TiltakstyperState>) => {
      console.log(action.payload);
      // hentAlleTiltakstyperFraDB(state.tiltakstype);
      state.loading = false;
    },
    hentTiltakstyperError: state => {
      state.loading = false;
      state.error = 'Det har skjedd en teknisk feil';
    },
  },
});

export default tiltakstyperSlice.reducer;
