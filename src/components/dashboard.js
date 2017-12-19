import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from './home';
import api from '../utils/api_helper';

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      auth: api.is_logged_in()
    };
  }

  render(){
    if (this.state.auth)
      return <Home />;
    else
      return <Redirect to="/auth" />;
  }
}