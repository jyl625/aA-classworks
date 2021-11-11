import { connect } from 'react-redux';
import StepList from './step_list.jsx';
import stepsByTodoId from "../../reducers/selectors";


const mapStateToProps = (state) => ({
  steps: stepsByTodoId(state, 1),
  todo_id: 1
})

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => (dispatch(receiveStep(step))),
  removeStep: (step) => (dispatch(removeStep(step)))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList)