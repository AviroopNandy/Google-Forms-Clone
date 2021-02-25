import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch , Route } from 'react-router-dom';

import Home from '../src/containers/Home/Home';
import LoginApp from "../src/components/LoginApp/LoginApp";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginApp} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
