import React from 'react';
import Auth0Lock from 'auth0-lock';
import Promise from 'bluebird';
import { Redirect, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import {isLoggedIn, isRegistered, auth0, saveLoginData} from '../utils/api-helper'

class LoginAuth0 extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      auth: isLoggedIn(),
      registered: false
    };

    // Configuration for auth0 Lock 
    this._lock = Promise.promisifyAll(new Auth0Lock(auth0.clientId, auth0.domain, {
      languageDictionary: {"title":"WolfBeacon"},
      language: "en",
      theme: {
        logo:"/assets/logo.png",
        primaryColor: "#37819B"
      },
      auth: {
        params: {scope: 'openid email profile'},
      },
      closable: false,
      rememberLastLogin: false
    }));
  }

  async componentDidMount() {
    try {
      let authResult = await new Promise(resolve => this._lock.on('authenticated', resolve));
      let profile = await this._lock.getUserInfoAsync(authResult.accessToken);
      
      saveLoginData(authResult, profile);
      await this.checkRegistered();
    } catch (err) {
      console.error(err);
    }
  }

  async checkRegistered() {
    this.setState({auth: isLoggedIn(), registered: await isRegistered()});
  }

  render() {
    if (this.state.auth) {
      this._lock.hide();
      //this.props.history.replace(this.state.registered ? "/dash" : "/jointheteam");
      return <Redirect to={(this.state.registered ? "/dash" : "/jointheteam")} />;
    } else {
      this._lock.show();
      return <div></div>;
    }
  }
}
LoginAuth0.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}

export default withRouter(LoginAuth0)
