const model = require('../models/Model');
const { ObjectID } = require('mongodb');
const {Model} = require('mongoose');

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
 * Collection of Get methods from the database
 */
const Get =  {

    /**
     * Finds a single user by their id
     * @param {ObjectID} id user Id
     * @returns {Model<Document, model.User>} User or null
     */
    UserById: async (id) => {
        return errorWrapper(()=> model.User.findById(ObjectID(id)));
    },
    /**
     * Finds a single user by their id
     * @param {String} userName user userName
     * @returns {Model<Document, model.User>} User or null
     */
    UserByUserName: async (userName) => {
        return errorWrapper(()=> model.User.findOne({userName:userName}));
    },
    /**
     *@param {String} username username to check if exists (github); 
     */
    UserExists: async (username) => {
        console.log("testing username:",username);
        return errorWrapper(() => model.User.exists({userName:username}));
    },
    /**
     * finds all mentors of the given user
     * @param {ObjectID} id user Id
     * @return {[model.User]}
     */
    MentorsByUserId: async (id) => {         
       return errorWrapper( () => model.User.find({mentees:ObjectID(id)}));        
    },

    /**
     * finds all mentees of a given user 
     * @param {ObjectID} id user Id
     * @return {[User]} array of Users
     */
    MenteesByUserId: async (id)=>{
       return errorWrapper(async ()=> {
        let u = await model.User.findById(ObjectID(id))
        .populate({path:'mentees'});        
        return u.mentees;
        });
    },

    /**
     * finds and populates all the badges of a given user
     * @param {ObjectID} id user Id
     * @return {[Badge]} 
     */
    BadgesByUserId: async (id) => {
       return errorWrapper( async ()=>{
        let u = await model.User.findById(ObjectID(id))
        .populate({path:'badges'});
        return u.badges;
        });
    },
    /**
     * finds and populates all the achievements of a given user 
     * @param {ObjectID} id user Id
     * @return {[Schema<Achievement>]} achievements
     */
    AchievementsByUserId: async (id) =>{
       return errorWrapper( async ()=>{
        let u = await model.User.findById(ObjectID(id))
        .populate({path:'achievements'});
        return u.achievements;
       });
    },

    /**
     * finds and populates all projects created by a given user  
     * @param {ObjectID} id user Id
     * @return {[Model]} projects     
     */
    ProjectsByUserId: async (id) => {
       return errorWrapper( async () =>
       {
        let u = await model.User.findById(ObjectID(id))
        .populate({path:'projects'});
        return u.projects;
        }
       );
    },

    /**
     * find a project by its id
     * @param {ObjectID} id project id
     * @return {Model} project
     */
    ProjectById: async (id) =>{
       return errorWrapper( ()=>model.Project.findById(ObjectID(id)));
    }
}

module.exports = Get;