import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

// Membuat reducer dengan caching menggunakan Redux Persist
const createCachedReducer = (reducerKey, initialState, reducer) => {
  const persistConfig = {
    key: reducerKey,
    storage,
    transforms: [immutableTransform()],
  };

  const persistedReducer = persistReducer(persistConfig, reducer);

  return (state = initialState, action) => {
    if (action.type === 'CLEAR_SEARCH_RESULTS') {
      return initialState;
    }
    return persistedReducer(state, action);
  };
};

export default createCachedReducer;
