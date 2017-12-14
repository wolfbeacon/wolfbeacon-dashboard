import React, { Component } from 'react';

import Navbar from './navbar';
import Statistics from './statistics';
import Search from './search';
import Footer from './footer';

import '../css/bulma.css';

import  feather from 'feather-icons';
import $ from 'jquery';

class Home extends Component {

  componentDidMount(){
    // Replaces all feather i classes with icons
    feather.replace();

    var search = false;
    $("#search").on("click", function() {
        if (search) {
            search = false;
            $(".search-icon")
                .removeClass("rotate-in")
                .addClass("rotate-out")
                .data('feather', 'x');
            $(".site-content")
                .removeClass("pull-down")
                .addClass("pull-up");
        } else {
            search = true;
            $(".search-icon")
                .removeClass("rotate-out")
                .addClass("rotate-in")
                .data('feather', 'search');
            $(".site-content")
                .removeClass("pull-up")
                .addClass("pull-down");
        }
    });

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
  }

  render() {
    return (

      <div className="parent">
        <Navbar></Navbar>
        <div className="site-content">
          <Search></Search>
          <Statistics></Statistics>

      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Overview
            </h1>

            <div className="columns">
              <div className="column is-3">
                <p>Phasellus vestibulum fringilla nunc, 
                in convallis augue posuere quis. Vivamus 
                ante turpis, hendrerit a odio a, lacinia 
                consectetur risus. Vivamus rutrum nisl vitae 
                lectus ornare egestas nec ac nisi. Fusce 
                sed ligula semper, vehicula neque id, ultricies 
                erat. Pellentesque habitant morbi tristique 
                senectus et netus et malesuada fames ac turpis egestas.</p>
              </div>
              <div className="column is-9">
                <div className="box">

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="hero is-gray">
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

    )
  }
}

export default Home;