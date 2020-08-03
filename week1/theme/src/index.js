import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from './Theme'



ReactDOM.render(
  <ThemeProvider value={'dark'}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

