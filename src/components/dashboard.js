import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from './home';
import api from '../utils/api_helper';

export default class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      auth: api.isLoggedIn()
    };
  }

  logout(){
    localStorage.removeItem('wb_access_token');
    localStorage.removeItem('wb_id_token');
    localStorage.removeItem('wb_expires_at');
    this.setState({auth: false});
  }

  render(){
    if (this.state.auth)
      return <Home logout={this.logout.bind(this)}/>;
    else
      return <Redirect to="/" />;
  }
}