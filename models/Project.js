import mongoose from 'mongoose';
import User from './User';
import {ObjectID} from 'mongodb';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    owner:{
        type: ObjectID, ref: 'User'
    },
    name:{
        type: String,
        required: true
    },
    externalLink: String,    
    collaborators:[{type: ObjectID, ref:'User'}],
    comments:[{
        user:{
            type: ObjectID, ref: 'User'
        },
        message:{
            type: String
        },
        timestamp:{
            type: Date,
            default: Date.now
        }
    }],
    lastUpdated:{
        type: Date
    },
    tags:[String],
    createdOn:{
        type: Date,
        default: Date.now
    }    
});

projectSchema.pre('findOneAndUpdate',() =>{
    this.set({ lastUpdated: Date.now }); 
});

projectSchema.post('save',(doc)=>{
    User.findByIdAndUpdate(doc.owner,{$push:{
        projects: doc._id
    }});
});

const Project = mongoose.model("Project", projectSchema);

export default Project;