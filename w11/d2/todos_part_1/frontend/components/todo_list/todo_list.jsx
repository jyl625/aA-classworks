import React from "react";
import TodoListItem from './todo_list_item'
import TodoForm from "./todo_form";


export default (props) => {

  return (
    <div>
      <h3>Here's your ToDo List!</h3>
      <TodoForm receiveTodo={props.receiveTodo} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Body</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo) => {
            return <TodoListItem
              todo={todo}
              key={todo.id}
              removeTodo={props.removeTodo}
              receiveTodo={props.receiveTodo} />
          })}
        </tbody>
      </table>
    </div>
    
  )
}