import React from 'react';

// export default (props) => {
//   const handleStatusChange = (e) => {
//     let todo = Object.assign({},props.todo);

//     todo.done = todo.done ? false : true

//     props.receiveTodo(todo);
//   };

//   return (
//     <div>
//       <h3>{props.todo.title}</h3>
//       <p>{props.todo.body}</p>
//       <a href="#" onClick={this.handleStatusChange.bind(this)}>{props.todo.done ? "Done" : "Not Started"} </a>
//     </div>
//   )
// }

class TodoListItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleStatusChange(e) {
    let todo = Object.assign({}, this.props.todo);

    todo.done = todo.done ? false : true

    this.props.receiveTodo(todo);
  }

  handleDelete(e) {
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <tr>
        <td>{this.props.todo.title}</td>
        <td>{this.props.todo.body}</td>
        <td><a href="#" onClick={this.handleStatusChange}>{this.props.todo.done ? "Done" : "Not Started"}</a></td>
        <td><a href="#" onClick={this.handleDelete}>Delete</a></td>
      </tr>
    )
  }

}

export default TodoListItem;
