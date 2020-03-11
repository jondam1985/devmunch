import React,{useEffect} from 'react';
import { useAuth0 } from '../../react-auth0-spa';

const Login = () => {

  const {isAuthenticated,loginWithRedirect} = useAuth0();



  return(
    <>
      { 
        (!isAuthenticated) ?
        <>
          <div>
            please log in
            <button id="login" 
              onClick={() => loginWithRedirect({})}
            >Log in</button>
          </div>
        </>
        : 
        null
      }
    </>
        
  )
}

export default Login