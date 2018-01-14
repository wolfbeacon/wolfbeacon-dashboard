import React from 'react';
import PropTypes from 'prop-types';
import feather from 'feather-icons';

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
      .then(profile => {
        this.setState({user: profile});
        feather.replace();
      });
  }

  getAge(birthday) {
    // birthday is a string containing the date
    // eg: 1998-11-07
    const today = new Date();
    const birthDate = new Date(birthday);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
  }

  render() {
    const hacker = this.props.hacker;
    const user = this.state.user;

    if (!user)
      return (
        <div>Loading user data</div>
      );

    const age = this.getAge(user.birthday);
    // Set application tag class
    let tagClass = "tag ";
    switch(hacker.application_status){
      case "accepted":
        tagClass+="is-success";
        break;
      case "rejected":
        tagClass+="is-danger";
        break;
      case "wait-listed":
        tagClass+="is-warning";
        break;
    }

    return (
      <div className="card user-card">
        <div className="card-content">
          <div className="content has-text-centered">
            <p className="is-size-5 is-marginless">{user.first_name + " " + user.last_name}</p>
            <span className={tagClass}>{hacker.application_status}</span><br />
            <div className="user-data">
              <span className="app-user-data"><i className="card-icon user-icon" data-feather="user"></i> {age} yrs </span>
              <span className="app-user-data"><i className="card-icon map-icon"  data-feather="map-pin"></i> {user.city} </span>
              <span className="app-user-data"><i className="card-icon book-icon"  data-feather="book-open"></i> {user.school_last_attended} </span>
            </div>
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