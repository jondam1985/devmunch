import React from 'react';
import {connect} from 'react-redux';

const Header = (props) => {
  const {nickname,name,picture} = props.user;
  const {title} = props


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
              <div className="img">
                  <img src={picture} alt="user-icon" />
              </div>
              <div className="name">
                {nickname}
              </div>
              <div className="arrow">
                  <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 0.857422L1 3.00781L5 3.00781L3 0.857422Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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

