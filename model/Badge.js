const mongoose = require('mongoose');

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
    }    
},
{timestamps: true});

const Badge = mongoose.model("Badge", badgeSchema);

module.exports = Badge;