import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch , Route } from 'react-router-dom';

import Home from '../src/containers/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
