const mongoose = require('mongoose');
const User = require('./User');
const {ObjectID} = require('mongodb');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    owner:{
        type: ObjectID, ref: 'User'
    },
    name:{
        type: String,
        required: true
    },
    description: String,
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
            default: Date.now()
        }
    }],    
    tags:[String]      
},
{timestamps: true});

projectSchema.pre('findOneAndUpdate',() =>{
    this.set({ lastUpdated: Date.now }); 
});

projectSchema.post('save',(doc)=>{
     
    User.findByIdAndUpdate(doc.owner,{$push:{
        projects: doc._id
    }},(err,res)=>{
        console.log(err);
        console.log(res);
    });
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;