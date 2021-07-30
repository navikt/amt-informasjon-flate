import { configureStore as store } from '@reduxjs/toolkit';
import tiltaktypeFilterReducer from './filtreringer/TiltakstypeFilterSlice';

export default store({
  reducer: { tiltaktypeFilterReducer },
});
