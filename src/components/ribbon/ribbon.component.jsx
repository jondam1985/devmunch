import React from 'react';

import NotificationBell from '../notification-bell/notification-bell.component'
import ProfileSettings from '../profile-settings/profile-settings.component'


const Ribbon = ({pageTitle}) => {
 return(
  <div>
    <p>{pageTitle}</p>
    <div> 
      <NotificationBell />
      <ProfileSettings />
    </div>

  </div>
 )
}

export default Ribbon