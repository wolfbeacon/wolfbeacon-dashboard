import React, { Component } from 'react';
import feather from 'feather-icons';
import $ from 'jquery';

class Navbar extends Component {

  componentDidMount(){
    var search = false;
    $("#search").on("click", function() {
        var icon;
        if (search) {
            search = false;
            $("#search")
                .removeClass("rotate-in")
                .addClass("rotate-out")
            $(".site-content")
                .removeClass("pull-down")
                .addClass("pull-up");
            icon = feather.icons.search.toSvg();
            $(this).delay(500).empty().append(icon);
        } else {
            search = true;
            $("#search")
                .removeClass("rotate-out")
                .addClass("rotate-in")
            $(".site-content")
                .removeClass("pull-up")
                .addClass("pull-down");
            icon = feather.icons.x.toSvg();
            $(this).delay(500).empty().append(icon);
        }
    });
  }

  render() {
    return (

    <nav className="navbar" role="navigation" aria-label="main navigation">
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

        <a className="navbar-item" id="search">
        	<i className="search-icon" data-feather="search"></i>
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
                Jeremy Philemon
              </a>

              <div className="navbar-dropdown">
                <div className="navbar-item">
                  my-email@gmail.com
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
            <i data-feather="user"></i>
          </a>
        </div>
    </div>
    </nav>

    )
  }
}

export default Navbar;