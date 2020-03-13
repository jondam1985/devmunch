import React,{useState,useEffect} from 'react';
import './App.css';
import Page from './components/page/page.component';
import {Switch,Route,Router} from 'react-router-dom';

import Login from './components/login/login-copmonent';

import Dashboard from './pages/dashboard-page/dashboard.component'
import Profile from './components/profile';

import history from "./utils/history";

import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from "./react-auth0-spa";



function App() {
  const { loading , isAuthenticated , user, getTokenSilently,getIdTokenClaims} = useAuth0(); 

  
  //why is this code just floating here?
  if (loading) {
    return <div>Loading...</div>;
  }
  //ditto
  if (isAuthenticated) {
    console.log("user:",user)
    //getToken()
    
    getTokenSilently()
    .then(token => {
      console.log(token);
    });

    getIdTokenClaims()
    .then(data =>{
      console.log(data);
    });
  }
  
  return (
    <div className="App">
      {
        isAuthenticated ? 
          (
            <>
              <Router history={history}>
                <Page >
                  <Switch>
                    <Route exact path={isAuthenticated?'/dashboard':'/'} component={Login}/>
                    <Route exact path='/dashboard' component={Dashboard}  />
                    <PrivateRoute path='/profile' component={Profile}  />
                  </Switch>
                </Page> 
              </Router>
            </>
          )
        :
        <Login  />
      }
    </div>  
  );
}

export default App;
