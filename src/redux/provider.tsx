'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './store';

const persist = persistStore(store);

// eslint-disable-next-line max-len
const Providers = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      {children}
    </PersistGate>
  </Provider>
);

export default Providers;
