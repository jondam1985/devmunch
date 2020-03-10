import Model from '../models/Model';
import { ObjectID } from 'mongodb';

function cb(err, res){
    if(err) throw new Error(err);
    return res;
}
/**
 * Collection of Delete methods from the database
 */
const Delete = {

    /**
     * deletes a user with the given id
     * @param {ObjectID} id id of user
     * 
     */
    UserById: (id) => {
        Model.User.findByIdAndDelete(id, cb);
    },

    /**
     * deletes a badge with the given id
     * @param {ObjectID} id id of user
     * 
     */
    BadgeById: (id) => {
        Model.Badge.findByIdAndDelete(id, cb);
    },

    /**
     * deletes an achievement with the given id
     * @param {ObjectID} id id of user
     * 
     */
    AchievementById: (id) => {
        
      Model.Achievement.findByIdAndDelete(id, cb);        
    },

    /**
     * deletes a project with the given id
     * @param {ObjectID} id id of user
     * 
     */
    ProjectById: (id) => {
        Model.Project.findByIdAndDelete(id, cb);
    }
}

export default Delete