import React from 'react';
import './login.styles.css';

import {useAuth0} from '../../react-auth0-spa.js';

const Login = () => {

  const {isAuthenticated,loginWithRedirect} = useAuth0();
  
  return(
    <>
      <div className="popup" id="popup">
          <div className="mask" id="mask"></div>
          <div className="popup-content">
              <div className="login-content active" id="login-content">
                  <div className="title">
                      Log in
                  </div>
                  <h2>
                      Log in  to your account
                  </h2>
                  <div className="img">
                      <img src="img/github.png" alt=""/>
                  </div>
                  <div className="sign-up">
                      Not a DeVMunch member? <a href="" id="changeLoginContent">Sign up here</a>
                  </div>
              </div>
              <div className="signup-content" id="signup-content">
                  <div className="title">Sign up</div>
                  <h2>Sign up to your account</h2>
                  <form action="" className="form">
                      <div className="input-item">
                          <input type="text" placeholder="name"/>>
                      </div>
                      <div className="input-item">
                          <input type="text" placeholder="Field of activity"/>
                      </div>
                      <div className="input-item">
                          <input type="text" placeholder="Code wars optional"/>
                      </div>
                      <div className="input-item">
                          <input type="text" placeholder="Tags of laguages of interest required"/>
                      </div>
                      <div className="tags">
                          <div className="tag-item">
                              <span className="close">x</span>
                              <span className="name">php</span>
                          </div>
                          <div className="tag-item">
                              <span className="close">x</span>
                              <span className="name">html</span>
                          </div>
                          <div className="tag-item">
                              <span className="close">x</span>
                              <span className="name">css</span>
                          </div>
                      </div>
                  </form>
                  <h2>
                      Do you want to be a mentor?
                  </h2>
                  <form action="" className="form">
                      <div className="input-item">
                          <input type="text" placeholder="Stack required"/>
                      </div>
                      <div className="input-item">
                          <input type="text" placeholder="Linkedin required"/>
                      </div>
                      <div className="input-item">
                          <input type="text" placeholder="Stack required"/>
                      </div>
                  </form>

                  <button>
                      Sign Up with GitHub
                  </button>
              </div>
          </div>
      </div>

      <div className="header">
          <div className="container">
              <div className="header__row">
                  <h1>
                      DevMunch
                  </h1>
                  <p>
                      DevMunch
                  </p>
                  <button id="login" 
                    onClick={() => loginWithRedirect({})}
                  >Log in</button>
              </div>
              <div className="info-block">
                  <div className="info-item">
                      <div className="img">
                          <img src="img/github.png" alt=""/>
                      </div>
                      <div className="title">
                          Lorem ipsum dolor sit amet
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </p>
                  </div>
                  <div className="info-item">
                      <div className="img">
                          <img src="img/github.png" alt=""/>
                      </div>
                      <div className="title">
                          Lorem ipsum dolor sit amet
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </p>
                  </div>
                  <div className="info-item">
                      <div className="img">
                          <img src="img/github.png" alt=""/>
                      </div>
                      <div className="title">
                          Lorem ipsum dolor sit amet
                      </div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </>    
  )
}

export default Login