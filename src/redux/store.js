import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './slice';

const store = configureStore({
  reducer: {
    places: placesReducer,
  },
});

export default store;
