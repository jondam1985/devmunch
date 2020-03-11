const model = require('../models/Model');
const { ObjectID } = require('mongodb');

function cb(err, res){
    if(err) throw new Error(err);
    return res;
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
    User: (user) => {
        model.User.create(user, cb);
    },

    /**
     * creates a new Badge from the given Badge Object
     * @param {model.Badge} badge
     * @return {ObjectID} objectID of created Badge
     */
    Badge: (badge) => {
        model.Badge.create(badge, cb);
    },

    /**
     * creates a new Achievement document
     * @param {model.Achievement} achievement
     * @return {ObjectID} objectID of created Achievement
     */
    Achievement: (achievement) => {        
        model.Achievement.create(achievement, cb);        
    },

    /**
     * creates a new Achievement document
     * @param {model.project} project
     * @return {ObjectID} objectID of created Project
     */
    Project: (project) => {
        model.Project.create(project, cb);
    }
}

module.exports = Create;