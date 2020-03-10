import model from '../models/Model';
import { ObjectID } from 'mongodb';
import {Model} from 'mongoose';


function cb(err, res){
    if(err) throw new Error(err);
    return res;
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
    UserById: (id) => {
        model.User.findById(id, cb);
    },

    /**
     * finds all mentors of the given user
     * @param {ObjectID} id user Id
     * @return {[model.User]}
     */
    MentorsByUserId: (id) => {         
        model.User.find({mentees:id}, cb);        
    },

    /**
     * finds all mentees of a given user 
     * @param {ObjectID} id user Id
     * @return {[User]} array of Users
     */
    MenteesByUserId: (id)=>{
        model.User.findById(id)
        .populate({path:'mentees'},(err,res)=>{
            if(err) throw new Error(err);
            return res.mentees;
        });
    },

    /**
     * finds and populates all the badges of a given user
     * @param {ObjectID} id user Id
     * @return {[Badge]} 
     */
    BadgesByUserId: (id) => {
        model.User.findById(id)
        .populate({path:'badges'},(err,res)=>{
            if(err) throw new Error(err);
            return res.badges;
        });
    },
    /**
     * finds and populates all the achievements of a given user 
     * @param {ObjectID} id user Id
     * @return {[Schema<Achievement>]} achievements
     */
    AchievementsByUserId: (id) =>{
        model.User.findById(id)
        .populate({path:'achievements'},(err,res)=>{
            if(err) throw new Error(err);
            return res.achievements;
        });
    },

    /**
     * finds and populates all projects created by a given user  
     * @param {ObjectID} id user Id
     * @return {[Model]} projects     
     */
    ProjectsByUserId: (id) => {
        model.User.findById(id)
        .populate({path:'projects'},(err,res)=>{
            if(err) throw new Error(err);
            return res.projects;
        });
    }
}

export default Get