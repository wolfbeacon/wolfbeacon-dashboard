/*

Helper module for making API calls.
Gets endpoints from config module.

*/

import axios from 'axios';

// CONSTANTS
const base = "https://api.wolfbeacon.com/v1";
const version = 1;
const endpoints = {
  hackathon: "hackathons/",
  user: "users/",
  hacker: (hackathon_id) => `hackathons/${hackathon_id}/hackers/`
}

/*
Exports contains all the necessary functions.
*/ 

const exports = {};


exports.is_config = false;

exports.init = (jwt_token) => {
  /*
  args: Auth Token (string)
  Initializes axios with base URL and Authentication headers
  */
  axios.defaults.baseURL = base;
  axios.defaults.headers.common['Authorization'] = `Bearer ${jwt_token}`;
  axios.defaults.headers.get['Content-Type'] = 'application/json';
  exports.is_config = true;
}

exports.is_logged_in = () => {
  /*
  Check whether a authentication token is present in the localStorage 
  */
  
}

export default exports;