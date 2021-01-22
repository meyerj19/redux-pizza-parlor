import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';

//reducer to hold pizza order, expects array in payload
const orderReducer = (state = [], action) => {



    if(action.type === 'GET_CART'){
      return state = action.payload;
    }

    return state;
}

const getPizza = (state = [], action) => {
    switch(action.type) {
      case 'GET_PIZZA':
        return action.payload;
        default: return state;
    }
  
}


//storing customer information, expects object in payload
const customerReducer = (state = {}, action) =>{
    switch (action.type) {
      case 'SET_CUSTOMER_INFO':
        return action.payload;
      case 'RESET_CUSTOMER_INFO':
        return state = {};
      default:
        return state;
    }
}

const orderHistoryReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_ORDERS':
      return action.payload;
    default:
      return state;
  }
}

const reduxStore = createStore(
    combineReducers({
      orderReducer,
      customerReducer,
      getPizza,
      orderHistoryReducer
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
