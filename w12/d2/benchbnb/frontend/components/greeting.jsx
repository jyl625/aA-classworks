import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { currentUser, logout } = this.props;

    // testing 
    // return (currentUser ? <h1>Welcome!</h1> : <h1>Please Log In</h1> )


    if (currentUser) {
      return (
        <div>
          <h1>Welcome!</h1>
          <button onClick={logout}>Log Out</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">Login</Link>
        </div>
      )
    }

  }
}

export default Greeting