import React, { Component } from 'react';

import Navbar from './navbar.js';

import '../css/bulma.css';

import feather from 'feather-icons';

class Footer extends Component {

  componentDidMount(){
    feather.replace();
  }

  render() {
    return (

    <section class="hero is-danger">
        <div class="hero-body">
          <div class="container has-text-centered">
            Made with <i class="search-icon heart" data-feather="heart"></i> by the open source community
          </div>
        </div>
      </section>

    )
  }
}

export default Footer;