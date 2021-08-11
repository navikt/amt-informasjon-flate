import { configureStore as store } from '@reduxjs/toolkit';
import brukerVisningsReducer from './toggle/BrukerVisningsToggleSlice';
import bildeListeVisningsReducer from './toggle/BildeListeVisningsToggleSlice';
import filterReducer from './filtreringer/FiltreringSlice';
import opprettTiltakReducer from './api/OpprettTiltakSlice';

export default store({
  reducer: {
    brukerVisningsReducer,
    bildeListeVisningsReducer,
    filterReducer,
    opprettTiltakReducer,
  },
});