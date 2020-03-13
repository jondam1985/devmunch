import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ButtonGenerator = () => {
  const generateBottonsForUser = (user) => {
    const buttons = [
      {
        name: 'Home',
        icon: 'url to icon',
        mentee: true,
        to:'/'
      },
      {
        name: 'Profile',
        icon: 'url to icon',
        mentee: true,
        to:'/profile'
      },
      {
        name: 'Mentors',
        icon: 'url to icon',
        mentee: true
      },
      {
        name: 'Projects',
        icon: 'url to icon',
        mentee: false
      }
    ]

    if (user === 'mentor') {
          return (
            <>
              <div className="nav-item">
                    <div className="main">
                        <img src="img/multiple-users.png" alt="" />
                        <div className="title">
                            Mentors
                        </div>
                    </div>
                    <div className="sub-links">
                      <button><Link to="/mymentors" >My mentors</Link></button>
                      <button><Link to="/mentorslist" >Mentors list</Link></button>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="main">
                        <img src="img/start-up.png" alt="" />
                        <div className="title">
                            My projects
                        </div>
                    </div>
                    <div className="sub-links">
                        <button><Link to="/project" >Project</Link></button>
                        <button><Link to="/menteesproject" >Mentees Projects</Link></button>
                    </div>
                </div>
              </>
            )
    } 

  }

  return(
        <nav>
          {generateBottonsForUser('mentor')}
        </nav>
  )
}

export default ButtonGenerator;





