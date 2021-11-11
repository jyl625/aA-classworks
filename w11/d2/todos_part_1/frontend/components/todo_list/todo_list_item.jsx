import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleStatusChange = this.handleStatusChange.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      detail: false
    }
    this.handleDetailChange = this.handleDetailChange.bind(this)
  }

  handleStatusChange(e) {
    let todo = Object.assign({}, this.props.todo);
    todo.done = todo.done ? false : true
    this.props.receiveTodo(todo);
  }

  showDetail() {
    if (this.state.detail) {
      return (
        <TodoDetailViewContainer
          todo={this.props.todo}
          removeTodo={this.props.removeTodo}
        />
      )
    } else {
      return (
        <>
          <td>???</td>
          <td>No.</td>
        </>
      )
    }
  }

  handleDetailChange(){
    let detail = !this.state.detail
    this.setState({detail})
  }

  // handleDelete(e) {
  //   this.props.removeTodo(this.props.todo);
  // }

  render() {
    return (
      <tr>
        <td><a href="#" onClick={this.handleDetailChange}>{this.props.todo.title}</a></td>
        {/* <td>{this.props.todo.body}</td> */}
        <td><a href="#" onClick={this.handleStatusChange}>{this.props.todo.done ? "✅" : "❌"}</a></td>
        {/* <td><a href="#" onClick={this.handleDelete}>🗑</a></td> */}
        {this.showDetail()}
      </tr>
    )
  }

}

export default TodoListItem;

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
