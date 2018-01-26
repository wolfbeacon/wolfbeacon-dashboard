import React from 'react';
import PropTypes from 'prop-types';

import feather from 'feather-icons';
import Modal from 'react-responsive-modal';
import { getUserById } from '../utils/api-helper';

export default class ApplicationCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({open: true});
  }

  closeModal() {
    this.setState({open: false});
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

  renderSocialLinks() {
    const social = this.state.user.social_links;
    return (
      <div className="urls">
        {social.github?<a className="has-text-primary" href={social.github} target="_blank">Github</a>:""}
        {social.linkedIn?<a className="has-text-primary" href={social.linkedIn} target="_blank">LinkedIn</a>:""}
        {social.resume?<a className="has-text-primary" href={social.resume} target="_blank">Resume</a>:""}
      </div>
    );
  }

  render() {
    const hacker = this.props.hacker;
    const user = this.state.user;

    if (!user)
      return (
        <LoadingCard />
      );

    const age = this.getAge(user.birthday);
    const social = this.state.user.social_links;
    window.user = this.state.user;
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
      default:
        tagClass+="";
    }

    return (
      <div className="card user-card" onClick={this.openModal}>
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

        <Modal
          open={this.state.open}
          onClose={this.closeModal}
          closeOnOverlayClick={false}
          little>
          <div className="modal-content has-text-centered">
            <p className="is-size-3 has-text-weight-light has-text-capitalized">{user.first_name + " " + user.last_name}</p>
            <p className={tagClass+" is-medium"}>{hacker.application_status}</p><br />
            <div className="user-data">
              <p className="app-user-data"><strong>Age</strong> {age} yrs </p>
              <p className="app-user-data"><strong>Location</strong> {user.city} </p>
              <p className="app-user-data"><strong>University</strong> {user.school_last_attended} </p>
              <br />
              <p className="is-size-5">Social Links</p>
              <div>
                {!social?"No social links provided.":this.renderSocialLinks()}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const LoadingCard = () => (
  <div className="card user-card" onClick={this.openModal}>
    <div className="card-content">
      <div className="content has-text-centered">
        <p className="is-size-5 is-marginless is-blurred">Lorem Epsum</p>
        <span className="is-blurred">applied</span><br />
        <div className="user-data">
          <span className="app-user-data is-blurred"><i className="card-icon user-icon" data-feather="user"></i>18 years</span>
          <span className="app-user-data is-blurred"><i className="card-icon map-icon"  data-feather="map-pin"></i> Location </span>
          <span className="app-user-data is-blurred"><i className="card-icon book-icon"  data-feather="book-open"></i> University </span>
        </div>
      </div>
    </div>
  </div>
);

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