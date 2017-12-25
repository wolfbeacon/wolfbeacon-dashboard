import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './dashboard';
import LoginAuth0 from './login';
import Jointheteam from './jointheteam';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="" component={LoginAuth0} />
          <Route exact path="/dash" component={Dashboard} />
          <Route exact path="/jointheteam" component={Jointheteam} />
          {
            /* ToDo: 404 pages */
          }
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
