import React, { useEffect } from 'react';
import NavButton from '../nav-button/NavButton.component';

const ButtonGenerator = ({user}) => {

  
  
  
  const generateBottonsForUser = ({user}) => {
    const buttons = [
      {
        name: 'Home',
        icon: 'url to icon',
        mentee: true
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
          <NavButton key={index} name={button.name} icon={button.icon} />
        )
      })

    } else {

      return buttons.filter((button)=>{
        return button.mentee === true
      }).map((button,index)=>{
        return (
          <NavButton key={index} name={button.name} icon={button.icon} />
        )
      })
    }

  }

  return(
    <>
      {generateBottonsForUser(user)}
    </>
  )
}

export default ButtonGenerator;





