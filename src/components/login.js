import React from 'react';
import Auth0Lock from 'auth0-lock';
import { Redirect, withRouter } from 'react-router-dom';

import api from '../utils/api_helper'

class LoginAuth0 extends React.Component {

  constructor (props) {
    super(props)

    // Configuration for auth0 Lock 
    this._lock = new Auth0Lock(api.auth0.clientId, api.auth0.domain, {
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
      });
  }

  componentDidMount() {
    this._lock.on('authenticated', (authResult) => {
      // Get user profile details with another api call to auth0

      // Hack to access the class's "this" from the function
      let that = this;
      this._lock.getUserInfo(authResult.accessToken, function(err, profile){
        if(err){
          console.log(err);
          return;
        }
        localStorage.setItem('wb_auth0_profile', JSON.stringify(profile));

        // Set authentication details in localStorage
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('wb_access_token', authResult.accessToken);
        localStorage.setItem('wb_id_token', authResult.idToken);
        localStorage.setItem('wb_expires_at', expiresAt);

        // Hide the modal
        that._lock.hide();

        // Check whether the user is registered with wolfbeacon
        if (api.is_registered())
          that.props.history.replace("/");
        else
          that.props.history.replace("/register");
      });
    })
  }

  showLogin = () => {
    this._lock.show();
  }

  render() {
    return (
      <div>
      {api.is_logged_in()?<Redirect to="/" />:this.showLogin()}
      </div>
    )
  }
}

export default withRouter(LoginAuth0)
