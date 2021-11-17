import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions'

// const _defaultState = {session: []}
const _defaultState = []

const sessionErrorsReducer = (state = _defaultState, action) => {
  // Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      // return Object.assign({}, {session: action.errors}); 
      return action.errors;
      
    case RECEIVE_CURRENT_USER:
      return _defaultState;
  
    default:
      return state;
  }
}

export default sessionErrorsReducer;