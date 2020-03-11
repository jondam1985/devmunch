import React, { useEffect } from 'react';
import NavButton from '../nav-button/NavButton.component';

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
      },
      {
        name: 'Orders',
        icon: 'url to icon',
        mentee: false
      },
      {
        name: 'Assitance',
        icon: 'url to icon',
        mentee: true
      },
      {
        name: 'Settings',
        icon: 'url to icon',
        mentee: true
      },
      {
        name: 'Log Out',
        icon: 'url to icon',
        mentee: true
      }
    ]

    if (user === 'mentor') {
      
      return buttons.map((button,index)=>{
        return (
          <NavButton to={button.to} key={index} name={button.name} icon={button.icon} />
        )
      })

    } else {

      return buttons.filter((button)=>{
        return button.mentee === true
      }).map((button,index)=>{
        return (
          <NavButton to={button.to} key={index} name={button.name} icon={button.icon} />
        )
      })
    }

  }

  return(
    <>
      {generateBottonsForUser('mentor')}
    </>
  )
}

export default ButtonGenerator;





