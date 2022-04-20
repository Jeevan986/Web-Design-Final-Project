import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './screens/Home';
import Blog from './screens/Blog';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Header*/}
      <Header/>
      {/* App Body */}
      <Home/>
    </div>
  );
}

export default App;
