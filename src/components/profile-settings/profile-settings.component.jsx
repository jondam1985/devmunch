import React from 'react';

import {useAuth0} from '../../react-auth0-spa';

const ProfileSettings = () => {

  const {isAuthenticated,logout} = useAuth0();



  return(
    <div>
      <p>to help page</p>
      <p>to profile settings page</p>
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  )
}

export default ProfileSettings;