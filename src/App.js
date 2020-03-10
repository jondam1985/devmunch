import React,{useState,useEffect} from 'react';
import './App.css';
import Page from './components/page/page.component';
import Login from './components/login/login-copmonent';

function App() {

  const [user,setUser] = useState(null);

  const handleGithHubOAuth = (oAuthUserInput) => {
    console.log(oAuthUserInput)
    // fetch('to: github oAuth')
    // .then(response => {
    //   setUser(response);
    // })
  }

  return (
    <div className="App">
      {
        user ? 
          (
            <>
              <Page >
                THE DIFF PAGES WILL GO HERE
              </Page> 
            </>
          )
        :
        <Login oAuthFunc={handleGithHubOAuth} />
      }
    </div>  
  );
}

export default App;
