import { configureStore as store } from '@reduxjs/toolkit';
import tiltaktypeFilterReducer from './filtreringer/TiltakstypeFilterSlice';
import kategoriFilterReducer from './filtreringer/KategoriFilterSlice';
import innsatsgruppeFilterReducer from './filtreringer/InnsatsgruppeFilterSlice';
import visningsReducer from './VisningsToggleSlice';

export default store({
  reducer: {
    tiltaktypeFilterReducer,
    kategoriFilterReducer,
    innsatsgruppeFilterReducer,
    visningsToggle: visningsReducer,
  },
});
