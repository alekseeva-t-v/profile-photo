import { configureStore } from '@reduxjs/toolkit';

import fotoSlice from './fotoSlice';


const store = configureStore({
  reducer: fotoSlice.reducer,
});

export default store;
