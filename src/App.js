import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './screens/Home';
import Blog from './screens/Blog';
import PlansPricing from './screens/PlansPricing';
import Reserve from './screens/Reserve';
import Facilities from './screens/Facilities';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Header*/}
      <Header/>
      {/* App Body */}
      <Router exact path = "/" component = {Home} />
      <Router exact path = "/PlansPricing" component = {PlansPricing} />
      <Router exact path = "/Reserve" component = {Reserve} />
      <Router exact path = "/Blog" component = {Blog} />
      <Router exact path = "/Facilities" component = {Facilities} />
    </div>
  );
}

export default App;
