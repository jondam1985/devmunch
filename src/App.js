import React,{useState,useEffect} from 'react';
import './App.css';
import Page from './components/page/page.component';
import {Switch,Route} from 'react-router-dom';
import Login from './components/login/login-copmonent';
import WelcomePage from './pages/welcome-page/welcome-page.component';

function App() {

  const [user , setUser] = useState(false)

  return (
    <div className="App">

      {
        user ? 
          (
            <>
              <Page >
                <Switch>
                  <Route exact='/home' component={WelcomePage}  />
                </Switch>
              </Page> 
            </>
          )
        :
        <Login  />
      }
    </div>  
  );
}

export default App;
