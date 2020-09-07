import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import fullStore from './redux/store'


ReactDOM.render(
  <Provider store={fullStore}>
     <React.StrictMode>
        <App />
     </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

