import React from 'react';
import axios from 'axios';
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

      </div>
    </Router>
  );
}

export default App;
