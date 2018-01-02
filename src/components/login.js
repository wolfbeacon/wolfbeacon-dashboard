import React from 'react';
import Auth0Lock from 'auth0-lock';
import Promise from 'bluebird';
import { Redirect, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import {isLoggedIn, isRegistered, auth0} from '../utils/api_helper'

class LoginAuth0 extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      auth: isLoggedIn()
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
      let profile = await Promise.promisify(this._lock.getUserInfoAsync(authResult.accessToken));
      
      localStorage.setItem('wb_auth0_profile', JSON.stringify(profile));
      // Set authentication details in localStorage
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('wb_access_token', authResult.accessToken);
      localStorage.setItem('wb_id_token', authResult.idToken);
      localStorage.setItem('wb_expires_at', expiresAt);

      this._lock.hide();

      let registered = await isRegistered();
      this.props.history.replace(registered ? "/dash" : "/jointheteam");      
    } catch (err) {
      console.error(err);
    }
  }

  showLogin() {
    this._lock.show();
  }

  render() {
    return (
      <div>
      {this.state.auth ? <Redirect to="/dash" /> : this.showLogin()}
      </div>
    )
  }
}
LoginAuth0.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
}

export default withRouter(LoginAuth0)
