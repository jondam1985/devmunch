import React,{useState} from 'react';
import Panel from '../../components/panel/panel.component';
import Header from '../../components/header/header.component';
import history from '../../utils/history';
import {useAuth0} from '../../react-auth0-spa';




const CreateProject = () => {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [techList, setTechlist] = useState();
  const [needHelp, setNeedHelp] = useState();
  const [githubRepo,setGithubRepo] = useState();
  const {user,isAuthenticated,getTokenSilently,getIdTokenClaims} = useAuth0();

  const getUserID = async function(){
    let userName = user.nickname;    
    let mUser = await (await fetch(`/api/user/byname/${userName}`)).json();
    console.log("user:",mUser);
    if(mUser.message){
      return null;
    }else{
      return mUser._id;
    }
  }

  const submitData = async (e) => {
    e.preventDefault();

    let userId = await getUserID();

    if(!userId || !isAuthenticated){
      console.log("user not logged in or doesn't exist");
      return;
    }

    const userData = {
      userId,
      title,
      description,
      techList,
      needHelp,
      githubRepo
    }

    const settings = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await getTokenSilently()}`
      },
      body: JSON.stringify(userData)
    }
    
    const url = "/api/project/add"


    fetch(url,settings)
    .then( resp => {
      if (resp.statusCode === 200) {
        history.push('/project');
      }
    })
    .catch(err=>console.log(err));

    
  }

  

  return(
    <>
    <Panel />
      <div className="content">
      <Header title="Create-Project" />
        <div className="projects">

        <div className="project-create-section">

          Add new project


          <form>
           
            <label>
              <div>
                Project Title:
                <input onChange={(e)=>{setTitle(e.target.value)}} name='title' type="text" />
              </div>
              <span className="label-info" >Name of your project</span>
            </label>

            <label>
              <div>
                Project Description:<input onChange={(e)=>{setDescription(e.target.value)}} name='description' type="text" />
              </div>
                <span className="label-info" >What is your project about?</span>
            </label>

            <label>
              <div>
                Technologies: <input onChange={(e)=>{setTechlist(e.target.value.split(',').map(e=>e.trim()))}} name='technology' type="text" />
              </div>
              <span className="label-info" >example: js,html,css</span>
            </label>
  
  
            <label>
              <div>
                Need help with: <input onChange={(e)=>{setNeedHelp(e.target.value)}} name='help' type="text" />
              </div>
              <span className="label-info" >What do you need help with?</span>
            </label>

          
            <label>
              <div>
                Github Repo link:<input onChange={(e)=>{setGithubRepo(e.target.value)}} name='repo' type="text" />
              </div>
              <span className="label-info" >Github link to the project</span>
            </label>



              {/* <input type="submit" onSubmit={submitData} className="drop-down-button" >+ Create</input> */}
              <input value="+ Create" type="submit" onClick={submitData} className="drop-down-button" />

          </form>


        </div>






        
        </div>
      </div>
    </>
  )
}

export default CreateProject;


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