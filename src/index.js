import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './pages/'
import './styles/global.scss';
import './styles/reset.scss';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
