import React, { Component } from 'react';

import Navbar from './navbar.js';
import Statistics from './statistics.js';

import '../css/bulma.css';

import feather from 'feather-icons';
import $ from 'jquery';

class Home extends Component {

  componentDidMount(){
    feather.replace();
    var search = false;
    $(".search-icon").on("click", function() {
        if (search) {
            search = false;
            $("#search")
                .removeClass("rotate-in")
                .addClass("rotate-out")
                .data('feather', 'x');
            $(".site-content")
                .removeClass("pull-down")
                .addClass("pull-up");
        } else {
            search = true;
            $("#search")
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

<div class="parent">
      <Navbar></Navbar>

      <div class="site-content">

      <div class="search-parent">
        <div class="field is-grouped search-field">
            <p class="control is-expanded">
              <input class="input is-large search-is-bold" name="query" type="text" required/>
            </p>
            <p class="control">
              <button type="submit" class="button is-success is-large bd-rainbow">
              <span class="icon">
                <i class="search-icon" data-feather="search"></i>
              </span>
              </button>
            </p>
        </div>
      </div>

      <Statistics></Statistics>

      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Overview
            </h1>

            <div class="columns">
              <div class="column is-3">
                <p>Phasellus vestibulum fringilla nunc, 
                in convallis augue posuere quis. Vivamus 
                ante turpis, hendrerit a odio a, lacinia 
                consectetur risus. Vivamus rutrum nisl vitae 
                lectus ornare egestas nec ac nisi. Fusce 
                sed ligula semper, vehicula neque id, ultricies 
                erat. Pellentesque habitant morbi tristique 
                senectus et netus et malesuada fames ac turpis egestas.</p>
              </div>
              <div class="column is-9">
                <div class="box">

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="hero is-gray">
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

      <section class="hero is-danger is-fullheight">
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

</div>

    )
  }
}

export default Home;