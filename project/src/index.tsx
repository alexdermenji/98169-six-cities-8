import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  COUNTRIES_QUANTITY: 3,
};

ReactDOM.render(
  <React.StrictMode>
    <App countriesQty={Settings.COUNTRIES_QUANTITY} />
  </React.StrictMode>,
  document.getElementById('root'),
);
