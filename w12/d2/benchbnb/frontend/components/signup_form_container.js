import { connect } from 'react-redux';
import { signup } from '../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "signup"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (form) => dispatch(signup(form))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);