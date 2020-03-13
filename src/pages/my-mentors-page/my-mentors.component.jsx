import React from 'react';
import Panel from '../../components/panel/panel.component';
import Header from '../../components/header/header.component';
import MentorContainer from '../../components/mentor-container/mentor-container.component';

const MyMentors = () => {
  return(
    <>
    <Panel />
    <div className="content">
      <Header title="My-Mentors" />
        <div className="projects">
          {/* list of mentors gets generated through this component.
              it needs to be passed recieved by a call to the server
              and to be passed down as props
          */}
            <MentorContainer />
        </div>
      </div>
    </>
  )
}

export default MyMentors;

