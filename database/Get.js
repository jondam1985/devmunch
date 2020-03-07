import Model from '../models/Model';

function cb(err, res){
    if(err) throw new Error(err);
    return res;
}

class Get {

    UserById(id){
        Model.User.findById(id, cb);
    }

    async MentorsByUserId(id){
        
       let users = await Model.User.find({});
       
        return users.filter(user =>{
            return (user.mentees.contains(id));
        });
        
    }

    MenteesByUserId(id){
        let user = this.GetUserByID(id);
        Model.User.find({_id:{
            $in: user.mentees
        }}, cb);
    }

    BadgesByUserId(id){
        let user = this.UserByID(id);
        Model.Badge.find({_id:{
            $in: user.badges
        }}, cb);
    }

    AchievementsByUserId(id){
        
        let user = this.UserByID(id);
        
        Model.Achievement.find({_id:{
            $in: user.achievements
        }}, cb);
    }

    ProjectsByUserId(id){
        let user = this.GetUserByID;
        Model.Project.find({_id:{
            $in: user.projects
        }}, cb);
    }
}

export default Get