import React,{useState,useEffect} from 'react';
import './App.css';
import './style/style.css';

import {Switch,Router} from 'react-router-dom';

import Login from './components/login/login-copmonent';

import Dashboard from './pages/dashboard-page/dashboard.component';
import MyMentors from './pages/my-mentors-page/my-mentors.component';
import MentorsList from './pages/mentors-list-page/mentors-list.component';
import Project from './pages/projects-page/projects-page.component';

// import Panel from './components/panel/panel.component';
import Settings from './pages/settings-page/settings.component';
import Help from './pages/help-page/help.component';

import history from "./utils/history";

import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from "./react-auth0-spa";



function App() {
  const { loading , isAuthenticated,user} = useAuth0();

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  
  return (
    <>
      {
        isAuthenticated ? 
          (
            <>
              <Router history={history}>
                {history.push('/dashboard')}
                <div className="dashboard">
                  <Switch>
                    <PrivateRoute exact path='/dashboard' component={Dashboard}  />
                    <PrivateRoute exact path='/mymentors' component={MyMentors}  />
                    <PrivateRoute exact path='/mentorslist' component={MentorsList}  />
                    <PrivateRoute exact path='/project' component={Project}  />                    
                    <PrivateRoute exact path='/help' component={Help}  />
                    <PrivateRoute exact path='/settings' component={Settings}  />
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
