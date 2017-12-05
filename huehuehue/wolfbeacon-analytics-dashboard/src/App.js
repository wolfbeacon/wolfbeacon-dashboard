import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/home.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {
            /* ToDo: 404 pages */
          }
        </Switch>
      </Router>
    );
  }
}

export default App;
