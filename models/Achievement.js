import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const achievementSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    levelValue:{
        type: Number
    },
    description: String,
    graphic:{
        source: String
    },
    createdOn:{
        type: Date,
        default: Date.now
    }    
});

const Achievment = mongoose.model("Project", achievementSchema);

export default Achievment;