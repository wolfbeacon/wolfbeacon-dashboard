import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import Navbar from './navbar';
import Footer from './footer';
import ApplicationCard from './application-card.js';
import { getUserProfile, getHackathon, getHackers } from '../utils/api-helper.js';

export default class Applications extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      profile: {},
      hackathon: {},
      hackers: [],
      notFound: false
    };
  }

  componentDidMount(){
    getUserProfile()
      .then(profiles => this.setState({profile: profiles[0]}));

    // Hackathon ID is parameter in the url 
    const hackId = this.props.match.params.hackathonId;

    getHackathon(hackId)
      .then(hackathon => this.setState({hackathon: hackathon}))
      .catch((err) => {
        if (err.response.status===404)
          this.setState({notFound: true});
      });

    getHackers(hackId)
      .then(hackers => this.setState({hackers: hackers}));
  }

  render(){
    if (this.state.notFound)
      return (
        <div>
        <Navbar profile={this.state.profile} />
        <h1 className="has-text-danger is-capitalized has-text-weight-light has-text-centered is-size-3">Oops this hackathon is not available.</h1>
        </div>
      );

    const hackathon = this.state.hackathon;
    return (
      <div className="applications-parent">
        <Navbar profile={this.state.profile} />
        <section className="section">
          <h1 className="has-text-success is-capitalized has-text-weight-light has-text-centered is-size-3">{hackathon.name}</h1>
        {
          /* Accepted / Pending section */
          /* Search bar */
          /* Export bar */
        }
        {
          // Render all hackers as cards
          this.state.hackers.map((item, i) => {
            return <ApplicationCard key={i} hacker={item} />
          })
        }
        </section>
        <Footer />
      </div>
    );
  }
}

Applications.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}