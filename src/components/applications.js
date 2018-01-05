import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import Navbar from './navbar';
import Footer from './footer';
import { getUserProfile, getHackathon } from '../utils/api-helper.js';

export default class Applications extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      profile: {},
      hackathon: {}
    };
  }

  componentDidMount(){
    getUserProfile()
      .then(profiles => this.setState({profile: profiles[0]}));

    // Hackathon ID is parameter in the url 
    const hackId = this.props.match.params.hackathonId;
    getHackathon(hackId)
      .then(hackathon => this.setState({hackathon: hackathon}));
  }

  render(){
    return (
      <div>
        <Navbar profile={this.state.profile}/>
        <h1 className="header">Applications Page</h1>
        <Footer />
      </div>
    );
  }
}

Applications.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}