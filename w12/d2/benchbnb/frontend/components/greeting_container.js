import { connect } from 'react-redux'
import Greeting from './greeting'
import { logout } from '../actions/session_actions'

// const mapStateToProps = state => ({
//   currentUser: state.entities.users[state.session.id] 
//   // can make this a little cleaner
// })

// deconstructed
const mapStateToProps = ({entities, session}) => ({
  currentUser: entities.users[session.id] 
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);