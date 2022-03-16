import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/';
import reportWebVitals from './reportWebVitals';

import './styles/global.scss';
import './styles/reset.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
