import { configureStore as store } from '@reduxjs/toolkit';
import visningsReducer from './VisningsToggleSlice';

export default store({
  reducer: { visningsToggle: visningsReducer },
});
