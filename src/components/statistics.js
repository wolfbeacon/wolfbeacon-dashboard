import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Statistics extends Component {

  render() {
    const {applied, accepted, waitlisted, rejected} = this.props.stats;

    // Loading dummy text
    const load = (<span className="is-blurred">8</span>);

    return (
    <nav className="level is-mobile">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Applied</p>
          <p className="title">{applied || load}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Accepted</p>
          <p className="title">{accepted || load}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Wait Listed</p>
          <p className="title">{waitlisted || load}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Rejected</p>
          <p className="title">{rejected || load}</p>
        </div>
      </div>
    </nav>

    )
  }
}

Statistics.propTypes ={
  stats: PropTypes.shape({
    applied: PropTypes.number,
    accepted: PropTypes.number,
    rejected: PropTypes.number,
    waitlisted: PropTypes.number,
  })
}