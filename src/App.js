import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch , Route } from 'react-router-dom';

import Home from '../src/containers/Home/Home';
import LoginApp from "../src/components/LoginApp/LoginApp";
import Contact from '../src/containers/Contact-Us/Contact-us';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/auth" component={LoginApp} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
