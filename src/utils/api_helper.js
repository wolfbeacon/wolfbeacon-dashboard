import axios from 'axios';

// CONSTANTS
const version = 1;
const base = "https://api.wolfbeacon.com/v" + version;
const endpoints = {
  hackathon: "/hackathons/",
  user: "/users",
  hacker: (hackathon_id) => `/hackathons/${hackathon_id}/hackers`
}


export let auth0 = {
  clientId: "BKkBkYiGNGn541qYI4unTh9SLMWSx223",
  domain: "wolf-beacon.auth0.com"
};

export function init(access_token) {
  axios.defaults.baseURL = base;
  axios.defaults.headers.common['Authorization'] = `Bearer ` + access_token;
  axios.defaults.headers.get['Content-Type'] = 'application/json';
}

export function isLoggedIn() {
  const acc_token = localStorage.getItem('wb_access_token');
  init(acc_token);
  return !!acc_token;
}

export function isRegistered() {
  const profile = JSON.parse(localStorage.getItem('wb_auth0_profile'));
  return axios.get(endpoints.user + `?email=${profile.email}`).then(res =>!!res.data.length);
}