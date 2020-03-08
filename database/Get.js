import Model from '../models/Model';

function cb(err, res){
    if(err) throw new Error(err);
    return res;
}

class Get {

    UserById(id){
        Model.User.findById(id, cb);
    }

    MentorsByUserId(id){        
        Model.User.find({mentees:id}, cb);        
    }

    MenteesByUserId(id){
        Model.User.findById(id)
        .populate({path:'mentees'},(err,res)=>{
            if(err) throw new Error(err);
            return res.mentees;
        });
    }

    BadgesByUserId(id){
        Model.User.findById(id)
        .populate({path:'badges'},(err,res)=>{
            if(err) throw new Error(err);
            return res.badges;
        });
    }

    AchievementsByUserId(id){
        Model.User.findById(id)
        .populate({path:'achievements'},(err,res)=>{
            if(err) throw new Error(err);
            return res.achievements;
        });
    }

    ProjectsByUserId(id){
        Model.User.findById(id)
        .populate({path:'projects'},(err,res)=>{
            if(err) throw new Error(err);
            return res.projects;
        });
    }
}

export default Get