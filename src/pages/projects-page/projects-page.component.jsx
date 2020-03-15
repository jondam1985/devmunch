import React,{useState,useEffect} from 'react';
import Panel from '../../components/panel/panel.component';
import Header from '../../components/header/header.component';
import ProjectContainer from '../../components/projects-container/projects-container.component';
import {useAuth0} from '../../react-auth0-spa';

import history from '../../utils/history';


const ProjectsPage = () => {
  const {user} = useAuth0();

  const [projectList,setProjectList] = useState(null);

  // const TEST_PROJECT_DATA = [
  //   {
  //     project_image: 'link: to project img',
  //     star_rating: [2,5],
  //     mentor_numbers: 7,
  //     comment_numbers: 105,
  //     project_title: "Lorem impsum",
  //     projet_desciprtion: "a little Lorem Ipsum, with ipsum tech",
  //     technologies: ["php","html","css"],
  //     contact_button_link: "link: to contact",
  //     view_details_link: "link: to details"
  //   },
  //   {
  //     project_image: 'link: to project img',
  //     star_rating: [2,5],
  //     mentor_numbers: 7,
  //     comment_numbers: 105,
  //     project_title: "Lorem impsum",
  //     projet_desciprtion: "a little Lorem Ipsum, with ipsum tech",
  //     technologies: ["php","html","css"],
  //     contact_button_link: "link: to contact",
  //     view_details_link: "link: to details"
  //   },
  //   {
  //     project_image: 'link: to project img',
  //     star_rating: [2,5],
  //     mentor_numbers: 7,
  //     comment_numbers: 105,
  //     project_title: "Lorem impsum",
  //     projet_desciprtion: "a little Lorem Ipsum, with ipsum tech",
  //     technologies: ["php","html","css"],
  //     contact_button_link: "link: to contact",
  //     view_details_link: "link: to details"
  //   }
  // ]
  

  useEffect(()=>{

    // unmute the following code for getting the "lareadt existing projects"

    // const userData = {
    //   userName: user.nickname,
    // }; 

    // const settings = {
    //   method: 'GET',      
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(userData)
    // }

    // const url = "/api/getprojects"

    // fetch(url,settings)
    // .then((resp)=>
    //   resp.json()
    // ).then(data =>{
    //   setProjectList(data)
    // })
    // .catch(err=>console.log(err))

  },[])


  useEffect(()=>{
    console.log(projectList)
  },[projectList])


  return(
    <>
    <Panel />
      <div className="content">
      <Header title="Projects" />
      <div className="projects">
        <div className="project-top-section">
            <button onClick={()=>{history.push('/createproject')}} className="drop-down-button" >+ New Project</button>
            <span>Current Projects: <span>0</span> </span>
        </div>



        {/* <ProjectContainer /> */}

      </div>
      </div>
    </>
  )
}

export default ProjectsPage;