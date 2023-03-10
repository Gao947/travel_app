import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import "./i18n/configs";
import { Provider } from 'react-redux';
import rootStore from './redux/store';
import axios from "axios";
import { PersistGate } from 'redux-persist/integration/react';

axios.defaults.headers['x-icode'] = '0599B41A68AC9071';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

