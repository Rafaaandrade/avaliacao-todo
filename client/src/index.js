import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Context } from './Context';

ReactDOM.render(
  <>
    <Context>
    <CssBaseline/>
      <App />
    </Context>
  </>,
  document.getElementById('root')
);

