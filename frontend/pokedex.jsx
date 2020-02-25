import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import createStore from './store/store'


window.addEventListener("DOMContentLoaded", () => {
  const store = createStore(),
    root = document.getElementById("root");
    
  ReactDOM.render(<Root store={store} />, root);
});