import React from 'react';
import Panel from '../../components/panel/panel.component';
import Header from '../../components/header/header.component';

const Help = () => {
  return(
    <>
      <Panel />
      <div className="content">
        <Header title="Help" />
        <div className="projects">
        {/* list of mentors gets generated through this component.
            it needs to be passed recieved by a call to the server
            and to be passed down as props
        */}
        HELP
      </div>
    </div>
  </>
  )
}

export default Help