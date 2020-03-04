import React,{useEffect,useState} from 'react';
import ProjectComponent from '../../components/project-component/project-component.component';

const ProjectsPage = () => {

  const [projectsList,setProjectsList] = useState()


  useEffect(()=>{

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

    let unmounted = false;

    // fetch('to:server/api/prijects')
    // .then((response=>{
    //   return response.json()
    // }))
    // .then(response=>{
    //   if(!unmounted){
    //     setProjectsList(response)
    //   }
    // })

    setProjectsList(TEST_PROJECT_DATA)

    return ()=>{
      unmounted = true
    }
  },[])

  return(
    <div>
      { 
        projectsList ?
        projectsList.map((project_data,index)=>{
          return (
              <ProjectComponent key={index} {...project_data} />
            )
        }) :
        null
      }
    </div>
  )
}

export default ProjectsPage;