import React from 'react';
import ButtonGenerator from '../button-generator/button-generator.component';

const NavBar = () => {

  return(
    <div>
      <Logo />
      <div className="button-list">
        <ButtonGenerator/>
      </div>
    </div>
  )
}

export default NavBar;