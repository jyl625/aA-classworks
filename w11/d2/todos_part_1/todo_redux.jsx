import configureStore from './frontend/store/store'
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Todos App</h1> , root)


  const store = configureStore();
  window.store = store
  // debugger
})