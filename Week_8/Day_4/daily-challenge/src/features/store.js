import { configureStore } from '@reduxjs/toolkit';
import ageReducer from './ageSlice';

export default configureStore({
  reducer: {
    age: ageReducer
  }
});