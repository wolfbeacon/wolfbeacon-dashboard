/*

Helper module for making API calls.
Gets endpoints from config module.
Config for auth0.
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

exports.auth0 = {
  clientId: "BKkBkYiGNGn541qYI4unTh9SLMWSx223",
  domain: "wolf-beacon.auth0.com"
}

exports.is_config = false;

exports.init = (access_token) => {
  /*
  args: Auth Token (string)
  Initializes axios with base URL and Authentication headers
  */
  axios.defaults.baseURL = base;
  axios.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1rSTBNamt4TWtWRlFrUkdRalE1UlRVNE1USTVOamRHUmpsQk1qVXpSVVJHTmtKQk1rUXhNUSJ9.eyJpc3MiOiJodHRwczovL3dvbGYtYmVhY29uLmF1dGgwLmNvbS8iLCJzdWIiOiI1NXFtQzg3SmZmTXFqQ3Vtbjlxb1l5ejNYb3BBaW9SdUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkud29sZmJlYWNvbi5jb20iLCJpYXQiOjE1MTM3NjY1NjUsImV4cCI6MTY3MTQ0NjU2NSwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.v2h86rkPsviKN99t3IPalE7z4Pb7KsBaXnk1LIBChoUCnPWE2boxBvAMXuQMp3_LJ-Ndvro3NoPOeuo2gVEAIXfboHeeaxUHhNxOPgB6syQcYEC-fXl4bdndoZvBT79xm5AwV0f4OFA1BWQ4j6PMCKiUPlRBAh8_gryT7-KoAjnfTYvfgDdaGpHsuW4KyEHj_WKUt0XNb8UTkBTtk3CIBjNN6NvGtLgSS13p672NAdBDDfAY7rduWD77AUHqdfXV0vshrg4XNfmK0BYYpIerLwkVgyIRyZk1GVQjQUAKe08XGNHPen1eWnoK7uk1zyhXFoItu6BL0b2ZHRZxsA-ovA`;
  axios.defaults.headers.get['Content-Type'] = 'application/json';
  exports.is_config = true;
}

exports.is_logged_in = () => {
  /*
  Check whether a authentication token is present in the localStorage 
  Returns a boolean.
  */
  let flag = false;
  const acc_token = localStorage.wb_access_token;
  if (acc_token)
    flag = true;
  exports.init(acc_token);
  return flag;
}

exports.is_registered = () => {
  /*
  Checks whether the authorized user has already registered.
  Returns a boolean.
  */
  let flag = false;
  const profile = JSON.parse(localStorage.wb_auth0_profile);
  axios.get(`/users?email=${profile.email}`)
    .then((res) => {
      const user = res.data;
      if(user.length)
        return true;
      return false;
    });
}

export default exports;