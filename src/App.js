import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Navigation/>

        </Route>
      </Switch>
    </Router>

   
 
  );
}

export default App;
