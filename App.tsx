import React from 'react';
import { Provider } from 'react-redux';

import Root from './src';
import store from './src/state/store';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
