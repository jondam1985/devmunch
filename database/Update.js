import Model from '../models/Model';

function cb(err, res){
    if(err) throw new Error(err);
    return res;
}

class Update {

    User(id,user){
        Model.User.FindByIdAndUpdate(id,user,cb);
    }

    UserLogIn(id){
        Model.user.FindByIdAndUpdate(id,{
            $set:{lastLogIn: Date.now}
        }, cb);
    }

    Badge(id,badge){
        Model.Badge.FindByIdAndUpdate(id,badge, cb);
    }

    Project(id, project){
        Model.Project.FindByIdAndUpdate(id,project, cb);
    }
   
    AddCommentToProject(id,userId,message){
        Model.Project.FindByIdAndUpdate(id,{
            $push:{
                comments: {
                    user: userId,
                    message: message
                }
            }}, cb);
    }

    AddCollaboraterToProject(id, collaboraterId){
        Model.Project.FindByIdAndUpdate(id,{
            $push:{
                collaborators: collaboraterId
            }
        }, cb);
    }

    AddTagsToProject(id, tags){
        Model.Project.FindByIdAndUpdate(id,{
            $push:{
                tags:{
                    $each:tags
                }
            }
        }, cb);
    }

    Achievement(id,achievement){        
      Model.Achievement.FindByIdAndUpdate(id,achievement, cb);        
    }
}

export default Update