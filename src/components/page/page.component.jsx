import React,{useEffect} from 'react';
import NavBar from '../navbar/navbar.component';
import Ribbon from "../ribbon/ribbon.component";

const Page = ({children}) => {

  return(
    <div>
      {/* this is the purple dahsboard */}
      <NavBar />
      {/* this is the top white ribbon for the users */}
      <Ribbon />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Page