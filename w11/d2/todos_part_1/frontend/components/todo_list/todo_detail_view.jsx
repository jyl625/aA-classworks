import React from "react";

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <>
        <td>{this.props.todo.body}</td>
        <td><a href="#" onClick={this.handleDelete}>🗑</a></td>
      </>
    )
  }
}

export default TodoDetailView;