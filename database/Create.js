import Model from '../models/Model';

class Create {

    User(user){
        Model.User.create(user,(err,res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }

    Badge(badge){
        Model.Badge.create(badge, (err,res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }

    Achievement(achievement){
        
      Model.Achievement.create(achievement, (err, res)=>{
        if(err) throw new Error(err);
        return res;
      });
        
    }

    Project(project){
        Model.Project.create(project, (err, res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }
}

export default Create