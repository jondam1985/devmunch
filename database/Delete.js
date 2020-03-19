const Model = require('../models/Model');
const { ObjectID } = require('mongodb') ;
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
 * Collection of Delete methods from the database
 */
const Delete = {

    /**
     * deletes a user with the given id
     * @param {ObjectID} id id of user
     * 
     */
    UserById: async (id) => {
        return errorWrapper(() => Model.User.findByIdAndDelete(ObjectID(id)));
    },

    /**
     * deletes a badge with the given id
     * @param {ObjectID} id id of user
     * 
     */
    BadgeById: async (id) => {
       return errorWrapper(() => Model.Badge.findByIdAndDelete(ObjectID(id)));
    },

    /**
     * deletes an achievement with the given id
     * @param {ObjectID} id id of user
     * 
     */
    AchievementById: async (id) => {
        return errorWrapper(() => Model.Achievement.findByIdAndDelete(ObjectID(id)));        
    },

    /**
     * deletes a project with the given id
     * @param {ObjectID} id id of user
     * 
     */
    ProjectById: async (id) => {
       return errorWrapper(() => Model.Project.findByIdAndDelete(ObjectID(id)));
    }
}

module.exports = Delete;