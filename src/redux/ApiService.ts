/* eslint-disable no-undef */
import { Dispatch } from 'redux';
import { TiltakState, tiltaklisteSlice } from './slice/OpprettTiltakSlice';
import { tiltakstyperSlice, TiltakstyperState } from './slice/TiltakstyperSlice';

const credentials = 'same-origin';

const MED_CREDENTIALS: RequestInit = {
  credentials,
  headers: {
    'Content-Type': 'application/json',
  },
};

const { leggTilTiltakLoading, leggTilTiltakSuccess, leggTilTiltakError } = tiltaklisteSlice.actions;
const { hentTiltakstyperLoading, hentTiltakstyperSuccess, hentTiltakstyperError } = tiltakstyperSlice.actions;

export const leggTilTiltak = (tiltak: TiltakState) => async (dispatch: Dispatch) => {
  try {
    dispatch(leggTilTiltakLoading());
    await fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak', {
      ...MED_CREDENTIALS,

      method: 'POST',
      body: JSON.stringify(tiltak),
    }).then(() => dispatch(leggTilTiltakSuccess(tiltak)));
  } catch (e) {
    dispatch(leggTilTiltakError());
  }
};

export const hentTiltakstyper = (tiltakstyper: TiltakstyperState) => async (dispatch: Dispatch) => {
  try {
    dispatch(hentTiltakstyperLoading());
    await fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak', {
      ...MED_CREDENTIALS,

      method: 'POST',
      body: JSON.stringify(tiltakstyper),
    }).then(() => dispatch(hentTiltakstyperSuccess(tiltakstyper)));
  } catch (e) {
    dispatch(hentTiltakstyperError());
  }
};
