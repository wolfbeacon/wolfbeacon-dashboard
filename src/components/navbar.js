import React, { Component } from 'react';
import PropTypes from 'prop-types';

import feather from 'feather-icons';

class Navbar extends Component {

  componentDidUpdate(){
    console.log("replace");
    feather.replace();
  }

  render() {
    const user = this.props.profile;
    const icon = this.props.search?feather.icons.x.toSvg():feather.icons.search.toSvg();
    return (

    <nav className="navbar" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img src="/assets/logo.png" alt="Wolfbeacon Logo"/>
        </a>

        <button className="button navbar-burger is-primary" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          <a className="navbar-item is-active">
            <b>Dashboard</b>
          </a>
          <a className="navbar-item">
            Organisations
          </a>
          <a className="navbar-item">
            Calendar
          </a>
        </div>
        
        <div className="navbar-end">
          <a className={"navbar-item " + (this.props.search ? "rotate-in" : "rotate-out")} id="search" onClick={this.props.toggle} dangerouslySetInnerHTML={{__html: icon}}>
          </a>
          <a className="navbar-item">
            <i data-feather="mail" alt="Inbox"></i>
          </a>
          <a className="navbar-item">
            <i data-feather="bell" alt="Notifications"></i>
          </a>
          <div className="navbar-item has-dropdown is-hoverable">

              <a className="navbar-link">
                {user?user.first_name:" "}
              </a>

              <div className="navbar-dropdown">
                <div className="navbar-item">
                  {user?user.email:" "}
                </div>
                <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Account Settings
                </a>
                <a className="navbar-item" onClick={this.props.logout}>
                  Log out
                </a>
              </div>

          </div>
          <a className="navbar-item profile-picture is-hidden-mobile">
            <i data-feather="box"></i>
          </a>
        </div>
    </div>
    </nav>

    )
  }
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  search: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Navbar;