//User DB model
import mongoose from 'mongoose';
import {ObjectID} from 'mongodb';

const Schema = mongoose.Schema;


/**
 * @class User
 */
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true
    },
    email:{
        type:String,
        trim:true,
    },
    pictureUrl:{
        type:String
    },    
    fullName:{
        type:String,
        trim:true
    },
    stackOverflowId:{
        type:String
    },
    codewarsId:{
        type:String,
        trim:true
    },
    linkedInId:{
        type:String,
        trim: true
    },
    gitHubId:{
        type: String
    },
    mentees:[{
        type : ObjectID, ref: 'User'
    }],
    isMentor:{
        type: Boolean
    },
    projects:[{
        type: ObjectID, ref: 'Project'
    }],
    level:{
        type:Number
    },
    badges:[{
        type: ObjectID, ref: 'Badge',
        obtainedOn: {
            type: Date,
            default: Date.now
        }
    }],
    chatThreads:[{
        type: ObjectID, ref: 'ChatThread'
    }],
    mentorRating: {
        type: Number
    },
    achievements:[{
        type: ObjectID, ref: 'Achievement',
        obtainedOn: {
            type: Date,
            default: Date.now
        }
    }],
    langInterestTags:[String],
    lastLogIn:{
        type: Date,
        default: Date.now
    },
    lastUpdated:{
        type: Date,
        default: Date.now
    },
    createdOn:{
        type: Date,
        default: Date.now
    },
    userStats:[{
        name: String,
        value: String
    }]
  }
);

userSchema.pre('findOnAndUpdate',()=>{
    this.set({ lastUpdated: Date.now });
})

const User = mongoose.model("User", userSchema);

export default User;
