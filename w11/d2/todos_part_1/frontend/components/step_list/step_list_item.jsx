import React from 'react';
// import TodoDetailViewContainer from './todo_detail_view_container';

class StepListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    <tr>
      <td>{this.props.step.title}</td>
      <td>{this.props.step.body}</td>
      <td><button onClick={}>{this.props.todo.done ? "✅" : "❌"}</button></td>
      <td><button onClick={}>Delete</button></td>
    </tr>
  }
}

export default StepListItem;