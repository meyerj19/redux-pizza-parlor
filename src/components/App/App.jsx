import React from 'react';
import axios from 'axios';
import Menu from '../Menu/Menu';
import Checkout from '../Checkout/Checkout';
import CustomerForm from '../CustomerForm/CustomerForm';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>



        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <Route path='/' component={Menu}/>

        <Route path='/customerForm' component={CustomerForm} />
        <Route path='/admin' component={Admin} />
        <Route path='/checkout' component={Checkout}></Route>

      </div>
    </Router>
  );
}

export default App;
