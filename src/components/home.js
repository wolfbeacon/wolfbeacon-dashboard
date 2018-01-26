import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import Navbar from './navbar';
import Statistics from './statistics';
import Search from './search';
import Footer from './footer';
import { getUserProfile } from '../utils/api-helper.js';

import '../css/bulma.css';

import feather from 'feather-icons';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {},
      search: false
    };
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
  }

  componentDidMount(){

    getUserProfile()
      .then(profiles => this.setState({profile: profiles[0]}));
    // Replaces all feather i classes with icons
    feather.replace();

    document.addEventListener('DOMContentLoaded',  () => {
      // Get all "navbar-burger" elements
      let navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        // Add a click event on each of them
        navbarBurgers.forEach(el => el.addEventListener('click', () => {
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          document.getElementById(el.dataset.target).classList.toggle('is-active');
        }));
    });
  }

  toggleSearchBar() {
    const search = this.state.search;
    this.setState({
      search: !search
    });
  }

  render() {
    return (
  <div className="parent">
    <Navbar 
      logout={this.props.logout}
      profile={this.state.profile}
      search={this.state.search}
      toggle={this.toggleSearchBar}
    />

    <div className="site-content">
      <Search search={this.state.search} />
      <Statistics />

      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Overview
            </h1>

            <div className="columns">
              <div className="column is-6">
                <p>Phasellus vestibulum fringilla nunc, 
                in convallis augue posuere quis. Vivamus 
                ante turpis, hendrerit a odio a, lacinia 
                consectetur risus. Vivamus rutrum nisl vitae 
                lectus ornare egestas nec ac nisi. Fusce 
                sed ligula semper, vehicula neque id, ultricies 
                erat. Pellentesque habitant morbi tristique 
                senectus et netus et malesuada fames ac turpis egestas.</p>
              </div>

              <div className="column is-6 has-text-centered">
                <center><i data-feather="calendar"></i></center>
                  
                  <h1 className="title">
                    24 days left until your hackathon starts
                  </h1>
                  <h2 className="subtitle">
                    Application closes on DD/MM/YYYY
                  </h2>               
              </div>

            </div>
            
            <div className="columns">
              <div className="column is-12">
                <h1 className="title is-1 has-text-centered">
                  HH:MM:SS
                </h1>  
              </div>
            </div> 

          </div>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Last 24 hours <i className="search-icon" data-feather="trending-up"></i>
            </h1>
            <h2 className="subtitle">
              <div className="buttons has-addons is-centered">
                <span className="button is-warning is-selected">24 hours</span>
                <span className="button">Week</span>
                <span className="button">Month</span>
              </div>
            </h2>

            <div className="columns">
              <div className="column is-4">
                <div className="box">

                </div>
              </div>
              <div className="column is-4">
                <div className="box">

                </div>
              </div>
              <div className="column is-4">
                <div className="box">

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

       <section className="hero is-success">
        <div className="hero-body">
          <div className="container">
             <h1 className="title">
                Finances <i data-feather="dollar-sign"></i>
              </h1>

              <div className="columns">
              <div className="column is-6">
                <div className="box">
                  <h1 className="title is-1 has-text-centered has-text-dark is-huge">$<CountUp start={0} end={60231} /></h1>
                  <h2 className="subtitle is-5 has-text-centered has-text-dark">Target</h2>
                </div>
              </div>
              <div className="column is-6">
                <div className="box">
                  <h1 className="title is-1 has-text-centered has-text-dark is-huge">$<CountUp start={0} end={1412} /></h1>
                  <h2 className="subtitle is-5 has-text-centered has-text-dark">Funds Available</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="hero is-danger is-light-blue is-fullheight">
        <div className="hero-body">
          <div className="container">
             <h1 className="title">
                Map comes here
              </h1>
              <h2 className="subtitle">
                May use D3.js
              </h2>
          </div>
        </div>
      </section>

      </div>

    <Footer></Footer>

  </div>

    );
  }
}
Home.propTypes = {
  logout: PropTypes.func.isRequired
};
export default Home;