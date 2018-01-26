import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    return (
      <div className={this.props.search?"pull-down":"pull-up"}>
        <div className="field is-grouped search-field">
            <p className="control is-expanded">
              <input className="input is-large search-is-bold" name="query" type="text" required/>
            </p>
            <p className="control">
              <button type="submit" className="button is-success is-large bd-rainbow">
              <span className="icon">
                <i className="search-icon-2" data-feather="search"></i>
              </span>
              </button>
            </p>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  search: PropTypes.bool.isRequired
}