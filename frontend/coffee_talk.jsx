import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    
    
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { id }
        };
        store = configureStore(preloadedState);
        
        // Clean up after ourselves so we don't accidentally use the
        // global currentUser instead of the one in the store
        delete window.currentUser;
        
    } else {
        store = configureStore();
    }
    
    // window.getState = store.getState;
    // window.login = login;
    // window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    // ReactDOM.render(<Root store={store} />, root);
    
    ReactDOM.render(<Root store={store}/>, root);
    //ReactDOM.render(<h1>Welcome to coffee talk</h1>, root);
})