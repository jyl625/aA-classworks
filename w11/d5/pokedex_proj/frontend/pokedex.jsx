import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// ========= TESTING ONLY ========= //
import {receiveAllPokemon} from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util'
// ================================ //

document.addEventListener('DOMContentLoaded', () => {
  console.log("Wecelcome to PokeDex");

  const rootEle = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<h1>Pokedex</h1>, rootEle);

  // ========= TESTING ONLY ========= //
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // ================================ //
})