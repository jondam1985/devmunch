import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'

const Panel = () => {

  useEffect(()=>{
    if (
      document.querySelector(`.${window.location.pathname.substring(1)}-button`)
    ){
      document.querySelector(`.${window.location.pathname.substring(1)}-button`).classList.add('panel-button-active')
    }
  },[])

  return (
    <div className="panel">
            <div className="logo">
                DevMunch
            </div>
            <div className="home dashboard-button">
                <img src={require("../../style/img/home-run.png")} alt="" />
                  <Link className="title" to='/dashboard' >Dashboard</Link>
            </div>
            <nav>
                <div className="nav-item">
                    <div className="main">
                        <img src={require("../../style/img/multiple-users.png")} alt="" />
                        <div className="title">
                            Mentors
                        </div>
                    </div>
                    <div className="sub-links">
                      <Link className="mymentors-button" to='/mymentors' >My Mentors</Link>
                      <Link className="mentorslist-button" to='/mentorslist' >Mentors list</Link>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="main">
                        <img src={require("../../style/img/start-up.png")} alt="" />
                        <div className="title">
                            My projects
                        </div>
                    </div>
                    <div className="sub-links">
                      <Link className="project-button" to='/project' >Project</Link>
                      <Link className="enteesprojects-button" to='/enteesprojects' >Mentees Projects</Link>
                    </div>
                </div>
            </nav>
            <div className="terms">
                <a href="#">
                    Terms of service
                </a>
                <div className="copyright">
                   @ DevMunch 2020
                </div>
            </div>
        </div>
  )
}

export default Panel;