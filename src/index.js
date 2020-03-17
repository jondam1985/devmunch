import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import store from './redux/store';

import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : "/dashboard"
  );
};

console.log("environment:", process.env.NODE_ENV);
//const REDIRECT_URI = (process.env.NODE_ENV === "production")? "https://dev-devmunch.herokuapp.com/dashboard":"http://localhost:3000/dashboard"; 
const REDIRECT_URI = "https://dev-devmunch.herokuapp.com/dashboard";
console.log("redirect URI:", REDIRECT_URI);
ReactDOM.render(
    <Provider store={store}>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={REDIRECT_URI}
        onRedirectCallback={onRedirectCallback}
        returTo='/'
      >
        <App />
      </Auth0Provider>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
