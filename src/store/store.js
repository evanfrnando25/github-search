import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
