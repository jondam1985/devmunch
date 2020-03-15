import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {useAuth0} from '../../react-auth0-spa'

const Header = (props) => {

  const {logout} = useAuth0();

  const {nickname,name,picture} = props.user.userObject;
  const {title} = props

  const [isOpen , setIsOpen] = useState(null)

  useEffect(()=>{
    document.querySelector('.hedaer-name-arrow').addEventListener('click',(e)=>{
      if (document.querySelector('.arrow').style.transform === "rotate(180deg)" ){
        document.querySelector('.arrow').style.transform = 'rotate(0deg)'
        setIsOpen(null)
      } else {
        document.querySelector('.arrow').style.transform = 'rotate(180deg)';
        setIsOpen('open')
      }
    })
  },[])


  return(
    <div className="header">
      <div className="title">
        {title ? title : name }
      </div>
      <div className="info">
          <div className="notification">
              <img src={require("../../style/img/notification.png")} alt="notification" />
          </div>
          <div className="user">
              <Link to="/dashboard" >
                <div className="img">
                  <img src={picture} alt="user-icon" />
                </div>
              </Link>

              <div className="hedaer-name-arrow">
                <div className="name">
                  {nickname}
                </div>
                <div className="arrow">
                    <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 0.857422L1 3.00781L5 3.00781L3 0.857422Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className={`drop-down ${isOpen}`}>

                  {/* <Link to="help" >
                    <div className="drop-down-button">
                      Help
                    </div>
                  </Link> */}

                  <Link to="/settings">
                    <div className="drop-down-button">
                      Settings
                    </div>
                  </Link>

                  <button className="drop-down-button" onClick={() => logout()}>Log out</button>
                </div>
              </div>
          </div>
      </div>
  </div>
  )
}



const mapStateToProps = ({user}) => {
  return{
    user: user
  }
}


export default connect(mapStateToProps)(Header);

