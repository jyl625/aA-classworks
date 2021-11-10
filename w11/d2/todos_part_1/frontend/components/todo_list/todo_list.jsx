import React from "react";
import TodoListItem from './todo_list_item'
export default (props) => {

  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul>{props.todos.map((todo) => {
        return <TodoListItem todo={todo} key={todo.id}/>
      })}</ul>
    </div>
    
  )
}