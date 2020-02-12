import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.getState = store.getState;
    window.login = login;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
    //ReactDOM.render(<h1>Welcome to coffee talk</h1>, root);
})