import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { allOffers } from './mocks/offers';


ReactDOM.render(
  <React.StrictMode>
    <App  offers={allOffers} />
  </React.StrictMode>,
  document.getElementById('root'),
);
