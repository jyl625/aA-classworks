import { login, logout, signup } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => (dispatch) => login(user)
  .then(user => dispatch(receiveCurrentUser(user)))

export const logout = () => (dispatch) => logout(user)
  .then(() => dispatch(logoutCurrentUser()));

export const signup = (user) => (dispatch) => signup(user)
  .then(user => dispatch(signup(user)));
