import { configureStore as store } from '@reduxjs/toolkit';
import toggleReducer from './slice/ToggleSlice';
import filterReducer from './slice/FiltreringSlice';
import opprettTiltakReducer from './slice/OpprettTiltakSlice';
import tiltakstyperReducer from './slice/TiltakstyperSlice';

export default store({
  reducer: {
    toggleReducer,
    filterReducer,
    opprettTiltakReducer,
    tiltakstyperReducer,
  },
});
