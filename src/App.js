import React,{useState,useEffect} from 'react';
import './App.css';
import './style/style.css';

import {Switch,Route,Router} from 'react-router-dom';

import Login from './components/login/login-copmonent';

import Dashboard from './pages/dashboard-page/dashboard.component';
import MyMentors from './pages/my-mentors-page/my-mentors.component';
import MentorsList from './pages/mentors-list-page/mentors-list.component';
import Project from './pages/projects-page/projects-page.component';

import history from "./utils/history";

import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from "./react-auth0-spa";



function App() {
  const { loading , isAuthenticated , user, getTokenSilently,getIdTokenClaims} = useAuth0();


  return (
    <>
      {
        true ? 
          (
            <>
              <Router history={history}>
                <div className="dashboard">
                  <Switch>
                  <Route exact path='/' component={Login}  />
                    <Route exact path='/dashboard' component={Dashboard}  />
                    <Route exact path='/mymentors' component={MyMentors}  />
                    <Route exact path='/mentorslist' component={MentorsList}  />
                    <Route exact path='/project' component={Project}  />
                    
                    {/* DONT DELETE THIS */}
                    {/* <PrivateRoute exact path='/dashboard' component={Dashboard}  /> */}

                  </Switch>
                </div>
              </Router>
            </>
          )
        :
        <Login />
      }
    </>
  );
}

export default App;
