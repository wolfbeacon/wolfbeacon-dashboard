import React, { Component } from 'react';

import '../css/bulma.css';

import feather from 'feather-icons';

class Footer extends Component {

  componentDidMount(){
    feather.replace();
  }

  render() {
    return (

    <section className="hero is-danger">
        <div className="hero-body">
          <div className="container has-text-centered">
            Made with <i className="search-icon heart" data-feather="heart"></i> by the open source community
          </div>
        </div>
      </section>

    )
  }
}

export default Footer;