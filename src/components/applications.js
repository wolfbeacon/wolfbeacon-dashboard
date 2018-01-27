import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import feather from 'feather-icons';

import Navbar from './navbar';
import Footer from './footer';
import Search from './search';
import ApplicationCard from './application-card.js';
import Statistics from './statistics.js';
import { getUserProfile, getHackathon, getHackers } from '../utils/api-helper.js';

import '../css/applications.css';

export default class Applications extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      profile: {},
      hackathon: {},
      hackers: [],
      stats: {},
      notFound: false,
      search: false,
    };
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
  }

  componentDidMount(){
    feather.replace();
    getUserProfile()
      .then(profiles => this.setState({profile: profiles[0]}));

    // Hackathon ID is parameter in the url 
    const hackId = this.props.match.params.hackathonId;

    // Fetch hackathon details 
    // If found: Updates the state with hackathon details
    // If not found: Sets notFound as true
    getHackathon(hackId)
      .then(hackathon => this.setState({hackathon: hackathon}))
      .catch((err) => {
        if (err.response.status===404)
          this.setState({notFound: true});
      });

    // Get the hackers of the hackathon and update state
    // When the hackers are found, the statistics get calculated
    // along with it
    getHackers(hackId)
      .then(hackers =>
        this.setState({
          hackers: hackers,
          stats: this.calculateStats(hackers)
        })
    );
  }

  calculateStats(hackers) {
    /*
    args:
      hackers: (array) of hackers belonging to this hackathon
    returns:
      stats: (array) Statistics of the application status
    */
    const stats = {
      applied: 0, 
      accepted: 0, 
      waitlisted: 0, 
      rejected: 0
    };

    // Split and join is for removing the hyphen from wait-listed
    // Since hyphens aren't allowed as variable names
    for(let i=0;i<hackers.length;i++)
      stats[hackers[i].application_status.split("-").join("")]++;

    return stats;
  }

  toggleSearchBar() {
    const search = this.state.search;
    this.setState({
      search: !search
    });
  }

  render(){
    // If the requested hackathon id is not found, show a 404
    if (this.state.notFound)
      return (
        <div>
        <Navbar profile={this.state.profile} />
        <h1 className="has-text-danger is-capitalized has-text-weight-light has-text-centered is-size-3">Oops this hackathon is not available.</h1>
        </div>
      );

    const hackathon = this.state.hackathon;

    // Header Margin Fix
    const headerStyle = {
      transition: "all 0.5ms ease-in",
      marginTop: this.state.search?80:30
    }

    return (
      <div className="applications-parent">
        <Navbar 
          profile={this.state.profile}
          toggle={this.toggleSearchBar}
          search={this.state.search}
        />
        <div className="site-content">
          <Search search={this.state.search} />
          <h1 className="has-text-success is-capitalized has-text-weight-light has-text-centered is-size-3" style={headerStyle}>{hackathon.name}</h1>
          <br />
          <Statistics stats={this.state.stats} />
          <br />
          {
            /* Export bar */
          }
        <h1 className="has-text-weight-light has-text-centered is-size-4">Applications</h1>
        <br />
        <div className="columns is-mobile">
          <div className="column is-half is-offset-one-quarter">
            {
              // Render all hackers as cards
              this.state.hackers.map((item, i) => {
                return <ApplicationCard key={i} hacker={item} />
              })
            }
          </div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Applications.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}