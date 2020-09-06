import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/Store';
import { Provider } from "react-redux"
import firebase from "firebase"


var firebaseConfig = {
  apiKey: "AIzaSyDQe6FpDCR_32WgWHLukgfViIPratqZ_qI",
  authDomain: "webchat-3ad71.firebaseapp.com",
  databaseURL: "https://webchat-3ad71.firebaseio.com",
  projectId: "webchat-3ad71",
  storageBucket: "webchat-3ad71.appspot.com",
  messagingSenderId: "601849161998",
  appId: "1:601849161998:web:82b5725160ff321b598f5f",
  measurementId: "G-Q8Y7NXC1E0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
