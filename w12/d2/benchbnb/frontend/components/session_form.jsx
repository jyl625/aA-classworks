import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
          <label>Username
            <input 
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
          </label>
          <label>Password
            <input 
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <input type="submit" value={this.props.formType} />
        </form >
        {this.props.formType === 'signup' ? <Link to='/login'/> :  <Link to='/signup'/> }
        {this.props.errors.length > 0 ? <div>{this.props.errors}</div> : <div></div>}
      </div>
    )
  }
}

export default SessionForm;