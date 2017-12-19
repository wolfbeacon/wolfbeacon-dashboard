import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './dashboard';
import LoginAuth0 from './login';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/auth" component={LoginAuth0} />
          {
            /* ToDo: 404 pages */
          }
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
