import axios from 'axios';
import Promise from 'bluebird';

// CONSTANTS
const version = 1;
const base = "https://api.wolfbeacon.com/v" + version + "/";
const access_token = require('./secret.json').access_token;
const endpoints = {
  hackathon: "hackathons/",
  user: "users/",
  hacker: (hackathon_id) => `hackathons/${hackathon_id}/hackers/`
}

export let auth0 = {
  clientId: "BKkBkYiGNGn541qYI4unTh9SLMWSx223",
  domain: "wolf-beacon.auth0.com"
};

export function isLoggedIn() {
  return !!localStorage.getItem('wb_access_token');
}

export function isRegistered() {
  if (!isLoggedIn()) {
    return Promise.resolve(false);
  }
  const profile = JSON.parse(localStorage.getItem('wb_auth0_profile'));
  return axios.get(base + endpoints.user, {
    params: {
      email: profile.email
    },
    headers: {
      'Authorization': 'Bearer ' + access_token,
      'Content-Type': 'application/json'
    }
  }).then(res => res.data.length > 0).catch(() => false);
}

export function saveLoginData(authResult, profile) {
  localStorage.setItem('wb_auth0_profile', JSON.stringify(profile));
  localStorage.setItem('wb_access_token', authResult.accessToken);
  localStorage.setItem('wb_id_token', authResult.idToken);
  localStorage.setItem('wb_expires_at', JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime()));
}

export function wipeLoginData() {
  localStorage.removeItem('wb_auth0_profile');
  localStorage.removeItem('wb_access_token');
  localStorage.removeItem('wb_id_token');
  localStorage.removeItem('wb_expires_at');
}

export function getUserProfile() {
  const profile = JSON.parse(localStorage.getItem('wb_auth0_profile'));
  return axios.get(base + endpoints.user, {
    params: {
      email: profile.email
    },
    headers: {
      'Authorization': 'Bearer ' + access_token,
      'Content-Type': 'application/json'
    }
  }).then(res => res.data)
    .catch(() => false);
}