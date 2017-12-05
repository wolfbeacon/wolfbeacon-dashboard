import React, { Component } from 'react';

import Navbar from './navbar.js';

import '../css/bulma.css';

import feather from 'feather-icons';

class Statistics extends Component {

  componentDidMount(){
    feather.replace();
  }

  render() {
    return (

    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Registered</p>
          <p class="title">3,456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Checked in</p>
          <p class="title">123</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Data1</p>
          <p class="title">456K</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Data2</p>
          <p class="title">789</p>
        </div>
      </div>
    </nav>

    )
  }
}

export default Statistics;