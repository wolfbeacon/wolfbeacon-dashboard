import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {

  constructor(props) {
    super(props);
    this.state = {name: this.props.name, id: this.props.id};
  }

  render() {
    const del = this.props.deleteFn.bind(null, this.props.name);
    return (
          <span className="tag is-success is-unselectable">
            {this.state.name}
            <button className="delete is-small" onClick={del}></button>
          </span>
    );
  }
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteFn: PropTypes.func.isRequired
};

export default Tag;