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
  const { handleRedirectCallback,loading , isAuthenticated , user, getTokenSilently,getIdTokenClaims} = useAuth0();

  const getTokenSilently_promise = async () => {
    await new Promise(async (res,rej)=>{
      const resp = await getTokenSilently()
      if (rej) {
        rej('what the hell happened?')
      } 
      if (res) {
        console.log("getTokenSilently:",resp)
        res()
      }
    })
  }

  const getIdTokenClaims_promise = async () => {
    await new Promise(async (res,rej)=>{
      const resp = await getIdTokenClaims()
      if (rej) {
        rej('what the hell happened?')
      } 
      if (res) {
        console.log("getIdTokenClaims:",resp)
        res()
      }
    })
  }

  const handleRedirectCallback_promise = async () => {
    await new Promise(async (res,rej)=>{
      await handleRedirectCallback()
      if (rej) {
        rej('what the hell happened?')
      } else {
        res()
      }
    })
  }
  
  

  if (loading) {
    return <div>Loading...</div>;
  }



  console.log(isAuthenticated)
  
  
  
  
  if (isAuthenticated) {
    console.log(user)
    getTokenSilently_promise()
    getIdTokenClaims_promise()
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
                    <Route exact path='/' component={Dashboard}  />
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
