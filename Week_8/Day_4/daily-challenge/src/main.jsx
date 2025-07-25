import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './features/store';
import AgeControls from './components/AgeControls';
import AgeDisplay from './components/AgeDisplay';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AgeDisplay />
    <AgeControls />
  </Provider>
);