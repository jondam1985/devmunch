import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    owner:{
        type: mongoose.Types.ObjectId
    },
    name:{
        type: String,
        required: true
    },
    externalLink: String,    
    collaborators:[mongoose.Types.ObjectId],
    comments:[{
        user:{
            type: mongoose.Types.ObjectId
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

const Project = mongoose.model("Project", projectSchema);

export default Project;