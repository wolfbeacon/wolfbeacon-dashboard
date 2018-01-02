import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from './home';
import {isLoggedIn, wipeLoginData} from '../utils/api-helper';

export default class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      auth: isLoggedIn()
    };
  }

  logout(){
    wipeLoginData();
    this.setState({auth: isLoggedIn()});
  }

  render(){
    if (this.state.auth)
      return <Home logout={this.logout.bind(this)}/>;
    else
      return <Redirect to="/" />;
  }
}