import configureStore from './frontend/store/store'
import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodos, receiveTodo, removeTodo } from './frontend/actions/todo_actions.js'
import { receiveSteps, receiveStep, removeStep } from './frontend/actions/step_actions.js'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Todos App</h1> , root)


  const store = configureStore();
  window.store = store
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  
  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;
  // console.log(window.receiveTodos)
})