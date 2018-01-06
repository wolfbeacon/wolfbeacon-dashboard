import axios from 'axios';
import Promise from 'bluebird';

// CONSTANTS
const version = 1;
const base = "https://api.wolfbeacon.com/v" + version + "/";
const access_token = require('./secret.json').access_token;
const endpoints = {
  user: "users/",
  hackers: "hackers/",
  hackathon: (hackathon_id) => `hackathons/${hackathon_id}/`
}

export let auth0 = {
  clientId: "BKkBkYiGNGn541qYI4unTh9SLMWSx223",
  domain: "wolf-beacon.auth0.com"
};

export function api() {
  return axios.create({
    baseURL: base,
    headers: {
      'Authorization': 'Bearer ' + access_token,
      'Content-Type': 'application/json'
    }
  });
}

export function isLoggedIn() {
  return !!localStorage.getItem('wb_access_token');
}

export function isRegistered() {
  if (!isLoggedIn()) {
    return Promise.resolve(false);
  }
  return getUserProfile()
    .then(res => res.length > 0).catch(() => false);
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
  // Returns the profile array matching the user ID
  const profile = JSON.parse(localStorage.getItem('wb_auth0_profile'));
  return api().get(endpoints.user, {
    params: {
      email: profile.email
    }
  }).then(res => res.data)
    .catch(() => false);
}

export function getUserById(id) {
  const url = endpoints.user + id + "/";
  return api().get(url)
    .then(res => res.data);
}

export function getHackathon(hackId) {
  const url = base + endpoints.hackathon(hackId);
  return api().get(url)
    .then(res => res.data);
}

export function getHackers(hackId) {
  const url = base + endpoints.hackers;
  return api().get(url, {
    params: {
      hackathon: hackId
    }
  }).then(res => res.data)
    .catch(() => false);
}