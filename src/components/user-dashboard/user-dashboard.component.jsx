import React from 'react';
import NavDashboard from '../nav-dashboard/nav-dashboard.component';
import UserRibbon from "../user-ribbon/user-ribbon.component";

const UserDashboard = () => {
  return(
    <>
    {/* this is the purple dahsboard */}
      <NavDashboard />

      {/* this is the top white ribbon for the users */}
      <UserRibbon />
    </>
  )
}

export default UserDashboard