import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, NETWORKS } from '@web3-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <Provider network={NETWORKS.mainnet}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
