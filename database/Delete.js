import Model from '../models/Model';

function cb(err, res){
    if(err) throw new Error(err);
    return res;
}
/**
 * Collection of Delete methods from the database
 */
const Delete = {

    UserById: (id) => {
        Model.User.findByIdAndDelete(id, cb);
    },

    BadgeById: (id) => {
        Model.Badge.findByIdAndDelete(id, cb);
    },

    AchievementById: (id) => {
        
      Model.Achievement.findByIdAndDelete(id, cb);        
    },

    ProjectById: (id) => {
        Model.Project.findByIdAndDelete(id, cb);
    }
}

export default Delete