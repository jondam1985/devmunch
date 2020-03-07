import Model from '../models/Model';

class Get {

    UserById(id){
        Model.User.findById(id, (err, result)=>{
            if(err){
                throw new Error(err);
            }
            return result;
        });
    }

    MentorsByUserId(id){
        
        Model.User.find({}, (err, res) => {
            if(err) throw new Error(err);
            return res;
        }).then(users => {
            return users.filter(user =>{
                return (user.mentees.contains(id));
            });
        });
    }

    MenteesByUserId(id){
        let user = this.GetUserByID(id);
        Model.User.find({_id:{
            $in: user.mentees
        }}, (err,res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }

    BadgesByUserId(id){
        let user = this.UserByID(id);
        Model.Badge.find({_id:{
            $in: user.badges
        }}, (err,res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }

    AchievementsByUserId(id){
        
        let user = this.UserByID(id);
        
        Model.Achievement.find({_id:{
            $in: user.achievements
        }}, (err,res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }

    ProjectsByUserId(id){
        let user = this.GetUserByID;
        Model.Project.find({_id:{
            $in: user.projects
        }}, (err, res)=>{
            if(err) throw new Error(err);
            return res;
        });
    }
}

export default Get