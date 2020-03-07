import Model from '../models/Model';

function cb(err, res){
    if(err) throw new Error(err);
    return res;
}

class Create {

    User(user){
        Model.User.create(user, cb);
    }

    Badge(badge){
        Model.Badge.create(badge, cb);
    }

    Achievement(achievement){
        
      Model.Achievement.create(achievement, cb);
        
    }

    Project(project){
        Model.Project.create(project, cb);
    }
}

export default Create