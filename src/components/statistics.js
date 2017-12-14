import React, { Component } from 'react';

import '../css/bulma.css';

import feather from 'feather-icons';

class Statistics extends Component {

  componentDidMount(){
    feather.replace();
  }

  render() {
    return (

    <nav className="level is-mobile">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Registered</p>
          <p className="title">3,456</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Checked in</p>
          <p className="title">123</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Data1</p>
          <p className="title">456K</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Data2</p>
          <p className="title">789</p>
        </div>
      </div>
    </nav>

    )
  }
}

export default Statistics;