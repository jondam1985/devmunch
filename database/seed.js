let mongoose = require("mongoose");
let db = require("../models/Model");
const {resolve} = require('path');
let dot = require('dotenv').config({path: resolve(__dirname,"../.env")});

console.log("dotenv?",dot);
console.log(__dirname.replace("database",""));

mongoose.connect(process.env.DEV_MONGODB || "mongodb://localhost/devmunch", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
},(err)=>{
    if(err) {throw new Error(err)};
    console.log("connected to: " + (process.env.DEV_MONGODB ? process.DEV_MONGODB:"localhost"));
});

let userSeed = [
    {
        userName: "TestUser1",
        email: "Test@Test.com",
        pictureUrl: "",
        fullName: "Test McTestface",
        stackOverflowId: "stackID",
        codewarsId: "codewarsID",
        gitHubId: "gitID",
        level: 5,
        langInterestTags: ["Javascript","PHP","React"]
    },
    {
        userName: "TestUser3",
        email: "Test3@Test.com",
        pictureUrl: "",
        fullName: "Test McTestface3",
        stackOverflowId: "stackID",
        codewarsId: "codewarsID",
        gitHubId: "gitID",
        level: 10,
        langInterestTags: ["Javascript","PHP","React"]
    },
    {
        userName: "TestUser3",
        email: "Test2@Test.com",
        pictureUrl: "",
        fullName: "Test McTestface2",
        stackOverflowId: "stackID",
        codewarsId: "codewarsID",
        gitHubId: "gitID",
        isMentor:true,
        mentorRating: 5,
        level: 30,
        langInterestTags: ["Javascript","PHP","React"]
    }
];
async function seed(){
    await db.User.deleteMany({})
    
    for(const user of userSeed){
        await db.User.create(user);   
        console.log("user created");       
    }
    await makeAndAssignProject();
    process.exit(0);
}

seed();

async function makeAndAssignProject(){
    let user = await db.User.findOne({});    
    let proj = {
        owner: user._id,
        name: "Test Proj1",
        tags: ["javascript, react"]
    };
    await db.Project.create(proj);
}
