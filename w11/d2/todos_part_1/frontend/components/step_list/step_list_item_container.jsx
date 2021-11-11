import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { removeStep, receiveStep } from "../../actions/step_actions"

const mapStateToProps = (state) => {
  return {
    step: step
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeStep: (step) => (dispatch(removeStep(step))),
    receiveStep: (step) => (dispatch(receiveStep(step)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepListItem)
