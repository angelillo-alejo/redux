import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

//Para obtener los posts de forma asíncrona usaremos Redux Thunk,
import thunk from 'redux-thunk';

// Función composeWithDevTools para poder inspeccionar los estados de Redux a través de las DevTools que hemos instalado.
import {composeWithDevTools} from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import rootReducer from './reducers';

import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
