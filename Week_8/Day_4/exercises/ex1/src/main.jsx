import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './features/store';
import UserData from './components/UserData';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserData />
  </Provider>
);