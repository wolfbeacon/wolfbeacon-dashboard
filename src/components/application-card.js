import React from 'react';
import PropTypes from 'prop-types';

import { getUserById } from '../utils/api-helper';

export default class ApplicationCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    getUserById(this.props.hacker.user)
      .then(profile => this.setState({user: profile}));
  }

  render() {
    const hacker = this.props.hacker;
    const user = this.state.user;

    if (!user)
      return (
        <div>Loading user data</div>
      );

    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{user.first_name + user.last_name}</p>
              <p className="subtitle is-6">@{user.username}</p>
            </div>
          </div>
          <div className="content">
            <p className="app-user-data">Age: {user.birthday}</p>
            <p className="app-user-data">Location: {user.location}</p>
            <p className="app-user-data">University: {user.school_last_attended}</p>
            <p className="app-user-data">Appliation Status: {hacker.application_status}</p>
          </div>
        </div>
      </div>
    );
  }
}

ApplicationCard.propTypes = {
  hacker: PropTypes.shape({
    id: PropTypes.number,
    hackathon: PropTypes.number,
    user: PropTypes.number,
    application_status: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired
};