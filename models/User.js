//User DB model
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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
        type : mongoose.Types.ObjectId, ref: 'User'
    }],
    isMentor:{
        type: Boolean
    },
    projects:[{
        type: mongoose.Types.ObjectId, ref: 'Project'
    }],
    level:{
        type:Number
    },
    badges:[{
        type: mongoose.Types.ObjectId, ref: 'Badge',
        obtainedOn: {
            type: Date,
            default: Date.now
        }
    }],
    chatThreads:[{
        type: mongoose.Types.ObjectId, ref: 'ChatThread'
    }],
    mentorRating: {
        type: Number
    },
    achievements:[{
        type: mongoose.Types.ObjectId, ref: 'Achievement',
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
