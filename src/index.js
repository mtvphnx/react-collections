import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './layouts/'
import './styles/reset.scss';
import './styles/perfectscroll.scss';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
