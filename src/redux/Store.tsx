import { configureStore as store } from '@reduxjs/toolkit';
import tiltaktypeFilterReducer from './filtreringer/TiltakstypeFilterSlice';
import kategoriFilterReducer from './filtreringer/KategoriFilterSlice';
import innsatsgruppeFilterReducer from './filtreringer/InnsatsgruppeFilterSlice';
import visningsReducer from './VisningsToggleSlice';
import stedFilterReducer from './filtreringer/StedFilterSlice';

export default store({
  reducer: {
    tiltaktypeFilterReducer,
    kategoriFilterReducer,
    innsatsgruppeFilterReducer,
    stedFilterReducer,
    visningsReducer,
  },
});
