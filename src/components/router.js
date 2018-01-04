import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './dashboard';
import LoginAuth0 from './login';
import JoinTheTeam from './jointheteam';
import Applications from './applications';

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginAuth0} />
          <Route exact path="/dash" component={Dashboard} />
          <Route exact path="/jointheteam" component={JoinTheTeam} />
          <Route path ="/applications/:hackathonId" component={Applications} />
          {
            /* ToDo: 404 pages */
          }
        </Switch>
      </Router>
    );
  }
}