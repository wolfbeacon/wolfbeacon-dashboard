import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: false
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    this.setState({search: !this.state.search});
  }

  render() {
    const user = this.props.profile;
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

        <a className={"navbar-item " + (this.state.search ? "rotate-in" : "rotate-out")} id="search" onClick="this.toggleSearch">
          <i className="search-icon" data-feather={(this.state.search ? "search" : "x")}></i>
        </a>
        
        <div className="navbar-end">
          <a className="navbar-item">
            <i data-feather="mail" alt="Inbox"></i>
          </a>
          <a className="navbar-item">
            <i data-feather="bell" alt="Notifications"></i>
          </a>
          <div className="navbar-item has-dropdown is-hoverable">

              <a className="navbar-link">
                {user.first_name || " "}
              </a>

              <div className="navbar-dropdown">
                <div className="navbar-item">
                  {user.email}
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
  profile: PropTypes.object.isRequired
};
export default Navbar;