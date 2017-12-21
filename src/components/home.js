import React, { Component } from 'react';

import Navbar from './navbar';
import Statistics from './statistics';
import Search from './search';
import Footer from './footer';

import '../css/bulma.css';

import feather from 'feather-icons';
import $ from 'jquery';

class Home extends Component {

  componentDidMount(){
    // Replaces all feather i classes with icons
    feather.replace();

    document.addEventListener('DOMContentLoaded', function () {
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });

          $('.count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 1000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
  }

  render() {
    return (
  <div class="parent">
    <Navbar logout={this.props.logout}></Navbar>

    <div class="site-content">
      <Search></Search>
      <Statistics></Statistics>

      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Overview
            </h1>

            <div class="columns">
              <div class="column is-6">
                <p>Phasellus vestibulum fringilla nunc, 
                in convallis augue posuere quis. Vivamus 
                ante turpis, hendrerit a odio a, lacinia 
                consectetur risus. Vivamus rutrum nisl vitae 
                lectus ornare egestas nec ac nisi. Fusce 
                sed ligula semper, vehicula neque id, ultricies 
                erat. Pellentesque habitant morbi tristique 
                senectus et netus et malesuada fames ac turpis egestas.</p>
              </div>

              <div class="column is-6 has-text-centered">
                <center><i data-feather="calendar"></i></center>
                  
                  <h1 class="title">
                    24 days left until your hackathon starts
                  </h1>
                  <h2 class="subtitle">
                    Application closes on DD/MM/YYYY
                  </h2>               
              </div>

            </div>
            
            <div class="columns">
              <div class="column is-12">
                <h1 class="title is-1 has-text-centered">
                  HH:MM:SS
                </h1>  
              </div>
            </div> 

          </div>
        </div>
      </section>

      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Last 24 hours <i class="search-icon" data-feather="trending-up"></i>
            </h1>
            <h2 class="subtitle">
              <div class="buttons has-addons is-centered">
                <span class="button is-warning is-selected">24 hours</span>
                <span class="button">Week</span>
                <span class="button">Month</span>
              </div>
            </h2>

            <div class="columns">
              <div class="column is-4">
                <div class="box">

                </div>
              </div>
              <div class="column is-4">
                <div class="box">

                </div>
              </div>
              <div class="column is-4">
                <div class="box">

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

       <section class="hero is-success">
        <div class="hero-body">
          <div class="container">
             <h1 class="title">
                Finances <i data-feather="dollar-sign"></i>
              </h1>

              <div class="columns">
              <div class="column is-6">
                <div class="box">
                  <h1 class="title is-1 has-text-centered has-text-dark is-huge">$<span class="count">60231</span></h1>
                  <h2 class="subtitle is-5 has-text-centered has-text-dark">Target</h2>
                </div>
              </div>
              <div class="column is-6">
                <div class="box">
                  <h1 class="title is-1 has-text-centered has-text-dark is-huge">$<span class="count">1412</span></h1>
                  <h2 class="subtitle is-5 has-text-centered has-text-dark">Funds Available</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="hero is-danger is-light-blue is-fullheight">
        <div class="hero-body">
          <div class="container">
             <h1 class="title">
                Map comes here
              </h1>
              <h2 class="subtitle">
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

export default Home;