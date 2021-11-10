import configureStore from './frontend/store/store'
import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodos, receiveTodo } from './frontend/actions/todo_actions.js'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Todos App</h1> , root)


  const store = configureStore();
  window.store = store
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  // console.log(window.receiveTodos)
})