import React from 'react';

class Clock extends React.Component {
  consturctor() {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  render() {
    return (
      <h1>Clock Title</h1>
    )
  }

  tick() {
    this.setState({time: new Date()});
  }
}

export default Clock;