const db = require('../database/database');
const express = require("express");
const apiRoutes = express.Router();

const checkJwt = require('./jwtAuth');

//new user signup
apiRoutes.post("/api/singup",
    async (req,res)=>{
        let userName = req.body.userName;
        if(db.Get.UserExists(userName)){
            res.write("User already exists");
        }else{
            let newUser = req.body;

            let user = {
                userName: newUser.userName,
                email: newUser.email,
                pictureUrl: newUser.pictureUrl,
                fullName: newUser.fullName,
                gitHubId: newUser.userName,
                langInterestTags: newUser.Tags || []
            };

            let newUserId = db.Create.User(user);
            //todo: add better error handling
            (newUserIdres)? res.json(newUserId):res.write("error");
        }
    }
);

//update user
apiRoutes.post('/api/user/:id', checkJwt,
    async (req, res) => {
        let userId = req.params.id;
        let updatedUserInfo = req.body;
        
        let user = {
            userName: updatedUserInfo.userName,
            email: updatedUserInfo.email,
            pictureUrl: updatedUserInfo.pictureUrl,
            fullName: updatedUserInfo.fullName,
            gitHubId: updatedUserInfo.userName,
            langInterestTags: updatedUserInfo.Tags
        };
        
        let dbResponse = await db.Update.User(userId,user);
        res.json(dbResponse);
    }
);

//get user
apiRoutes.get("/api/user/:id",checkJwt,
    async (req,res)=>{
        let userId = req.params.id;
        let user = await db.Get.UserById(userId);
        if(user != null){
            res.json(user);
        }else{
            res.write("User does not exist");
        }
    }
);

//get projects by userId
apiRoutes.get("/api/user/:id/projects", checkJwt,
    async (req,res) => {
        let userId = req.params.id;
        let projects = await db.Get.ProjectsByUserId(userId);        
        res.json(projects);
    }
);

//get project by id
apiRoutes.get("/api/project/:id", checkJwt,
    async (req,res) => {
        let projId = req.params.id;
        let project = await db.Get.ProjectById(id);
        res.json(project);
    }
);

//get mentor by user id
apiRoutes.get("/api/user/:id/mentor", checkJwt,
    async (req, res) => {
        let userId = req.params.id;
        let mentor = await db.Get.MentorsBuUserId(id);
        res.json(mentor);
    }
);

//add project
apiRoutes.post("/api/project/add", checkJwt,
    async (req, res) => {
        let project = req.body;
        let newProject = {
            owner: project.userId,
            name: project.name.trim(),
            tags: project.tags,
            externalLink: project.link.trim()
        };
        db.Create.Project(newProject);
    }
);

modules.exports.apiRoutes;