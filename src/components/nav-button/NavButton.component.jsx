import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({to,name,icon}) => {
  return(
    <>
      {
        to ? (<Link to={to} >{name}</Link>) : null
      }
    </>
    
  )
}

export default NavButton