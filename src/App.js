import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Main from './components/Main/Main';

function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Navigation/>
        <Main/>      
        </Route>
      </Switch>
    </Router>

   
 
  );
}

export default App;
