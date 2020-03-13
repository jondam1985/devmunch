const Model = require('../models/Model');
const { ObjectID } = require('mongodb');

function cb(err, res){
    if(err) throw new Error(err);
    return res;
}

/**
 * Collection of Update methods from the database
 */
const Update = {

    /**
     * @param {ObjectID} id id of the user
     * @param {Object} user User object to be updated from
     */
    User: (id,user) => {
        Model.User.FindByIdAndUpdate(id,user,cb);
    },

    /**
     * updates the user's last login to the current time;
     * @param {ObjectID} id id of the user
     */
    UserLogIn: (id) => {
        Model.user.FindByIdAndUpdate(id,{
            $set:{lastLogIn: Date.now}
        }, cb);
    },

    /**
     * updates the badge of the given id with new values
     * @param {ObjectID} id id of the badge to be udpated
     * @param {Object} badge object of the badge info to be updated
     */
    Badge: (id,badge) => {
        Model.Badge.FindByIdAndUpdate(id,badge, cb);
    },

    /**
     * updates the project of the given id with new values
     * @param {ObjectID} id id of the project to be udpated
     * @param {Object} project object of the project info to be updated
     */
    Project: (id, project) => {
        Model.Project.FindByIdAndUpdate(id,project, cb);
    },
   
    /**
     * adds a new comment to the project with the given id
     * @param {ObjectID} id id of the project to be udpated
     * @param {ObjectID} userId userID of the message creator
     * @param {String} message new message
     */
    AddCommentToProject: (id,userId,message) => {
        Model.Project.FindByIdAndUpdate(id,{
            $push:{
                comments: {
                    user: userId,
                    message: message
                }
            }}, cb);
    },

    /**
     * adds the given user to the project with the passed id
     * @param {ObjectID} id id of the project to be udpated
     * @param {ObjectID} collaboraterId id of the user to be added to the project
     */
    AddCollaboraterToProject: (id, collaboraterId) => {
        Model.Project.FindByIdAndUpdate(id,{
            $push:{
                collaborators: collaboraterId
            }
        }, cb);
    },

    /**
     * adds a list of tags to the tags property for the given project
     * @param {ObjectID} id id of the project to be udpated
     * @param {[String]} tags tags to be added
     * 
     */
    AddTagsToProject: (id, tags) => {
        Model.Project.FindByIdAndUpdate(id,{
            $push:{
                tags:{
                    $each:tags
                }
            }
        }, cb);
    },

    /**
     * @param {ObjectID} id id of the user
     * @param {Object} achievement achievemnt object to be updated from
     */
    Achievement: (id,achievement) => {        
      Model.Achievement.FindByIdAndUpdate(id,achievement, cb);        
    }
}

module.exports = Update;