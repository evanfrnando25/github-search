import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client'; 
import { persistStore } from 'redux-persist';
import store from './store/store';
import App from './App';

const rootElement = document.getElementById('root');
const persistor = persistStore(store);

const persistGate = (
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
);

createRoot(rootElement).render(
  <Provider store={store}>
    {persistGate}
  </Provider>
);
