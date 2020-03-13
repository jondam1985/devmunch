import React from 'react';
import Panel from '../../components/panel/panel.component';
import Header from '../../components/header/header.component';
import ProjectContainer from '../../components/projects-container/projects-container.component';

const ProjectsPage = () => {

  const TEST_PROJECT_DATA = [
    {
      project_image: 'link: to project img',
      star_rating: [2,5],
      mentor_numbers: 7,
      comment_numbers: 105,
      project_title: "Lorem impsum",
      projet_desciprtion: "a little Lorem Ipsum, with ipsum tech",
      technologies: ["php","html","css"],
      contact_button_link: "link: to contact",
      view_details_link: "link: to details"
    },
    {
      project_image: 'link: to project img',
      star_rating: [2,5],
      mentor_numbers: 7,
      comment_numbers: 105,
      project_title: "Lorem impsum",
      projet_desciprtion: "a little Lorem Ipsum, with ipsum tech",
      technologies: ["php","html","css"],
      contact_button_link: "link: to contact",
      view_details_link: "link: to details"
    },
    {
      project_image: 'link: to project img',
      star_rating: [2,5],
      mentor_numbers: 7,
      comment_numbers: 105,
      project_title: "Lorem impsum",
      projet_desciprtion: "a little Lorem Ipsum, with ipsum tech",
      technologies: ["php","html","css"],
      contact_button_link: "link: to contact",
      view_details_link: "link: to details"
    }
  ]
  

  return(
    <>
      <Panel/>
      <div className="content">
        <Header title="Projects" />
        <div className="projects">
          <ProjectContainer />
            
        </div>
      </div>
    </>
  )
}

export default ProjectsPage;