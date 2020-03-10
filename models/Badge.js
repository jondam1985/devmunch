import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const badgeSchema = new Schema({
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
        default: Date.now()
    }    
});

const Badge = mongoose.model("Project", badgeSchema);

export default Badge;