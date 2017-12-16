import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './home';
import LoginAuth0 from './login';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginAuth0} />
          {
            /* ToDo: 404 pages */
          }
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
