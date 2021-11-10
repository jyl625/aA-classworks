import configureStore from './frontend/store/store'
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './frontend/components/root'

import { receiveTodos, receiveTodo, removeTodo } from './frontend/actions/todo_actions.js'
import { receiveSteps, receiveStep, removeStep } from './frontend/actions/step_actions.js'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore();
  ReactDOM.render(<Root store={store} /> , root)


  window.store = store
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;

  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;
  // console.log(window.receiveTodos)
})