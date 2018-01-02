import React, { Component } from 'react';

export default class Statistics extends Component {

  render() {
    return (

    <nav className="level is-mobile">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Pre Stage</p>
          <i data-feather="activity"></i>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Applicants</p>
          <p className="title">3,456</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Accepted</p>
          <p className="title">123</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Expected</p>
          <p className="title">456K</p>
        </div>
      </div>
    </nav>

    )
  }
}