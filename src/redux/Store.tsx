import { configureStore as store } from '@reduxjs/toolkit';
import tiltaktypeFilterReducer from './filtreringer/TiltakstypeFilterSlice';
import kategoriFilterReducer from './filtreringer/KategoriFilterSlice';

export default store({
  reducer: { tiltaktypeFilterReducer, kategoriFilterReducer },
});
