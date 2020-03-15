const Model = require('../models/Model');
const { ObjectID } = require('mongodb');

/**
 * wraps DB calls in try catch for error handling
 * usage: errorWrapper(() => Model.Get.User(params))
 * @param {*} func 
 * @returns {*} result of func if it does not error out
 */
const errorWrapper = async (func) =>{
    try{
        let res = await func();
        return res;
    }catch(err){
        console.log(err);
    }
}

/**
 * Collection of Update methods from the database
 */
const Update = {

    /**
     * @param {ObjectID} id id of the user
     * @param {Object} user User object to be updated from
     */
    User: async (id,user) => {
       return errorWrapper(() =>  Model.User.FindByIdAndUpdate(ObjectID(id),user));
    },

    /**
     * updates the user's last login to the current time;
     * @param {ObjectID} id id of the user
     */
    UserLogIn: async (id) => {
       return errorWrapper(() =>  Model.user.FindByIdAndUpdate(ObjectID(id),{
            $set:{lastLogIn: Date.now()}
        }));
    },

    /**
     * updates the badge of the given id with new values
     * @param {ObjectID} id id of the badge to be udpated
     * @param {Object} badge object of the badge info to be updated
     */
    Badge: async (id,badge) => {
       return errorWrapper(() =>  Model.Badge.FindByIdAndUpdate(ObjectID(id),badge));
    },

    /**
     * updates the project of the given id with new values
     * @param {ObjectID} id id of the project to be udpated
     * @param {Object} project object of the project info to be updated
     */
    Project: async (id, project) => {
       return errorWrapper(() =>  Model.Project.FindByIdAndUpdate(ObjectID(id),project));
    },
   
    /**
     * adds a new comment to the project with the given id
     * @param {ObjectID} id id of the project to be udpated
     * @param {ObjectID} userId userID of the message creator
     * @param {String} message new message
     */
    AddCommentToProject: async (id,userId,message) => {
       return errorWrapper(() =>  Model.Project.FindByIdAndUpdate(ObjectID(id),{
            $push:{
                comments: {
                    user: ObjectID(userId),
                    message: message
                }
            }}));
    },

    /**
     * adds the given user to the project with the passed id
     * @param {ObjectID} id id of the project to be udpated
     * @param {ObjectID} collaboraterId id of the user to be added to the project
     */
    AddCollaboraterToProject: async (id, collaboraterId) => {
       return errorWrapper(() =>  Model.Project.FindByIdAndUpdate(ObjectID(id),{
            $push:{
                collaborators: ObjectID(collaboraterId)
            }
        }));
    },

    /**
     * @param {ObjectID} id id of the project
     * @param {[ObjectID]} collaboraterIds array of user ids to add to the project
     */
    AddCollaboratorToProjectBulk: async (id, collaboraterIds) =>{

        return errorWrapper(() => Model.Project.FindByIdAndUpdate(ObjectID(id),
        {
            $push:
            {
                collaborators:{ $each: collaboraterIds.map(e=>ObjectID(e))}
            }
        }));
    }, 
    /**
     * adds a list of tags to the tags property for the given project
     * @param {ObjectID} id id of the project to be udpated
     * @param {[String]} tags tags to be added
     * 
     */
    AddTagsToProject: async (id, tags) => {
      return errorWrapper(() =>  Model.Project.FindByIdAndUpdate(ObjectID(id),{
            $push:{
                tags:{
                    $each:tags
                }
            }
        }));
    },

    /**
     * @param {ObjectID} id id of the user
     * @param {Object} achievement achievemnt object to be updated from
     */
    Achievement: async (id,achievement) => {        
        return errorWrapper(() =>  Model.Achievement.FindByIdAndUpdate(ObjectID(id),achievement));        
    }
}

module.exports = Update;