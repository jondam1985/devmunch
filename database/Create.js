const model = require('../models/Model');
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
 * Collection of Create methods from the database
 */
const Create = {

    /**
     * creates a new User document from the given User object
     * @param {User} user
     * @return {ObjectID} objectID of created User
     */
    User: async (user) => {
        return errorWrapper(async () =>{ 
            let u = await model.User.create(user)
            return u._id            
        });
    },

    /**
     * creates a new Badge from the given Badge Object
     * @param {model.Badge} badge
     * @return {ObjectID} objectID of created Badge
     */
    Badge: async (badge) => {
       return errorWrapper(async () => {
           let b = await model.Badge.create(badge)
            return b._id;
        });
    },

    /**
     * creates a new Achievement document
     * @param {model.Achievement} achievement
     * @return {ObjectID} objectID of created Achievement
     */
    Achievement: async (achievement) => {        
       return errorWrapper(async () => {
           let a = await model.Achievement.create(achievement)
            return a._id;
        });        
    },

    /**
     * creates a new Achievement document
     * @param {model.project} project
     * @return {ObjectID} objectID of created Project
     */
    Project: async (project) => {
        return errorWrapper(async () => {
            let p = await model.Project.create(project);
            return p.id
        });
    }
}

module.exports = Create;