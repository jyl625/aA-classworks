// frontend/bench_bnb.jsx

import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'

// ======= testing only ======== //
// import {signup, login, logout} from "./util/session_api_util"
import {
  receiveCurrentUser,
  logoutCurrentUser,
  receiveErrors,
  login,
  logout,
  signup
} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render( <Root store={store}/>, root);


  // ======= testing only ======== //
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});