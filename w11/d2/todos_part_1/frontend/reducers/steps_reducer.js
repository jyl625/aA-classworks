import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions'

function getStepsObject(stepsArr) {
  let stepObj = {};
  stepsArr.forEach((step) => {
    stepObj[step.id] = step;
  })
  return stepObj;
}



const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_STEPS:
      nextState = getStepsObject(action.steps);
      return nextState
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step;
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
};

export default stepsReducer;