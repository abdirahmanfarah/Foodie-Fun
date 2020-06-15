import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import userReducer from './reducers'

import App from './App';
import './styles/index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store = {store}>
    <Router>
         <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));