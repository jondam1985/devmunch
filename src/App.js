import React,{useEffect} from 'react';
import './App.css';
import './style/style.css';

import {Switch,Router} from 'react-router-dom';

import Login from './components/login/login-copmonent';

import Dashboard from './pages/dashboard-page/dashboard.component';
import MyMentors from './pages/my-mentors-page/my-mentors.component';
import MentorsList from './pages/mentors-list-page/mentors-list.component';
import Project from './pages/projects-page/projects-page.component';

import Settings from './pages/settings-page/settings.component';
import Help from './pages/help-page/help.component';

import history from "./utils/history";

import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from "./react-auth0-spa";

import {connect} from 'react-redux'

function App() {
  const { loading , isAuthenticated,user} = useAuth0();

  const sendUserDataToServer = () => {

    const userData = {
      userName: user.nickname,
      email: user.email,
      pictureUrl: user.picture,
      fullName: user.name,
      gitHubId: user.nickname
    
    }; 

    const settings = {
      method: 'POST',      
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }

    const url = "/api/signup"

    fetch(url,settings)
    .then((resp)=>
      resp.json()
    ).then(data =>{
      console.log(data);
    })
    .catch(err=>console.log(err))

  }

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
            {
              sendUserDataToServer()
            }
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


// const mapStateToProps = state => {
//   return{

//   }
// }

const mapDispatchToProps = dispatch => {

  return {
    x:"x"
  }
}

export default connect(null,mapDispatchToProps)(App);
