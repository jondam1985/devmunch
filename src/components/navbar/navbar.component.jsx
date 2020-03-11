import React from 'react';
import Logo from '../logo/logo.component';
import ButtonGenerator from '../button-generator/button-generator.component';

const NavBar = () => {

  return(
    <div>
      <Logo />
      <div>
        <ButtonGenerator/>
      </div>
    </div>
  )
}

export default NavBar;