import Model from '../models/Model';

class Delete {

    UserById(id){
        Model.User.findByIdAndDelete(id,(err,res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }

    BadgeById(id){
        Model.Badge.findByIdAndDelete(id,(err,res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }

    AchievementById(id){
        
      Model.Achievement.findByIdAndDelete(id,(err,res)=>{
        if(err) throw new Error(err);
        return res;
        });        
    }

    ProjectById(id){
        Model.Project.findByIdAndDelete(id,(err,res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }
}

export default Delete