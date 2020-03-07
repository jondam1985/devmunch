import mongoose from 'mongoose';
import User from './User';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    owner:{
        type: mongoose.Types.ObjectId, ref: 'User'
    },
    name:{
        type: String,
        required: true
    },
    externalLink: String,    
    collaborators:[{type: mongoose.Types.ObjectId, ref:'User'}],
    comments:[{
        user:{
            type: mongoose.Types.ObjectId, ref: 'User'
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