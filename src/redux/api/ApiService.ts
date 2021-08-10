/* eslint-disable no-undef */
import { Dispatch } from 'redux';
import { TiltakState, tiltaklisteSlice } from './OpprettTiltakSlice';

const credentials = 'same-origin';

const MED_CREDENTIALS: RequestInit = {
  credentials,
  headers: {
    'Content-Type': 'application/json',
  },
};

const { leggTilTiltakLoading, leggTilTiltakSuccess, leggTilTiltakError } = tiltaklisteSlice.actions;

export const leggTilTiltak = (tiltak: TiltakState) => async (dispatch: Dispatch) => {
  try {
    dispatch(leggTilTiltakLoading());
    await fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak', {
      ...MED_CREDENTIALS,

      method: 'POST',
      body: JSON.stringify(tiltak),
    }).then(response => dispatch(leggTilTiltakSuccess(tiltak)));
  } catch (e) {
    dispatch(leggTilTiltakError());
  }
};
