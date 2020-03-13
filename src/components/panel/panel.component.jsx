import React from 'react';
import {Link} from 'react-router-dom'

const Panel = () => {
  return (
    <div className="panel">
            <div className="logo">
                DevMunch
            </div>
            <div className="home">
                <img src={require("../../style/img/home-run.png")} alt="" />
                {/* <div > */}
                  <Link className="title" to='/dashboard' >Dashboard</Link>
                {/* </div> */}
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
                    <Link to='/mymentors' >My Mentors</Link>
                      <Link to='/mentorslist' >Mentors list</Link>
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
                      <Link to='/project' >Project</Link>
                      <Link to='/enteesprojects' >Mentees Projects</Link>
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