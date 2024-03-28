import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderEntireTree(state) {

    root.render(
        <React.StrictMode>
            <App state = {state}
                 addPost={store.addPost.bind(store)}
                 changePostText={store.changePostText.bind(store)}
                 changeMessageText={store.changeMessageText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
            />
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
