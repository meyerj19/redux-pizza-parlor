import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';

//reducer to hold pizza order, expects array in payload
const orderReducer = (state = [], action) => {
    if(action.type === 'ALL'){
        state = action.payload;
    }
    return state;
}

//storing customer information, expects object in payload
const customerReducer = (state = {
    customer_name: 'Mike',
    street_address: '111 Butt Street',
    city: 'Danvers',
    zip: 69420,
    type: 'DELIVERY',

}, action) =>{
    return state
}

const reduxStore = createStore(
    combineReducers({
      orderReducer,
      customerReducer
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
