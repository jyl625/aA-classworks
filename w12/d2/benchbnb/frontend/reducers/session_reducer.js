import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

const _defaultState = {};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, { id: action.currentUser.id});
    case LOGOUT_CURRENT_USER:
      return _defaultState
    default:
      return state;
  }
}

export default sessionReducer;