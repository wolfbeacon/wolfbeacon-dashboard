import React from 'react';
import Auth0Lock from 'auth0-lock';
import { Redirect, withRouter } from 'react-router-dom';

import auth0 from '../utils/auth0';

class LoginAuth0 extends React.Component {

  constructor (props) {
    super(props)

    this._lock = new Auth0Lock(auth0.clientId, auth0.domain, {
      languageDictionary: {"title":"WolfBeacon"},
      language: "en",
      theme: {"logo":"/assets/logo.png"}
      });
  }

  componentDidMount() {
    this._lock.on('authenticated', (authResult) => {
      // Get user profile details with another api call to auth0
      this._lock.getUserInfo(authResult.accessToken, function(err, profile){
        if(err){
          console.log(err);
          return;
        }
        localStorage.setItem('wb_user_profile', profile);
      });

      // Set authentication details in localStorage
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('wb_access_token', authResult.accessToken);
      localStorage.setItem('wb_id_token', authResult.idToken);
      localStorage.setItem('wb_expires_at', expiresAt);

      // Hide the modal
      this._lock.hide();

      // Redirect to the dashboard
      this.props.history.replace("/");
    })
  }

  showLogin = () => {
    this._lock.show()
  }

  render() {
    let isLoggedin = false;
    if (localStorage.auth0IdToken)
      isLoggedin = true;
    return (
      <div>
      {isLoggedin?<Redirect to="/" />:this.showLogin()}
      </div>
    )
  }
}

export default withRouter(LoginAuth0)
