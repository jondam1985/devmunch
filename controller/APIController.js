const db = require('../database/database');
const express = require("express");
const apiRoutes = express.Router();

const checkJwt = require('./jwtAuth');

//new user signup
apiRoutes.post("/api/signup",
    async (req,res)=>{

        let userName = req.body.userName;
        let exists = await db.Get.UserExists(userName);
        
        if(exists){
            console.log("user already exists");
            res.json({message:"User already exists"});
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

            let newUserId = await db.Create.User(user);
            console.log("new user created");
            console.log(newUserId);
            //todo: add better error handling
            (newUserId)? res.json(newUserId):res.json({message:"error"});
        }
    }
);

//update user
apiRoutes.post('/api/user/:id', 
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
apiRoutes.get("/api/user/:id",
    async (req,res)=>{
        let userId = req.params.id;
        let user = await db.Get.UserById(userId);
        if(user != null){
            res.json(user);
        }else{
            res.json({message:"User does not exist"});
        }
    }
);

apiRoutes.get("/api/user/byname/:username", 
    async (req,res) =>{
        let userName = req.params.username;
        let user = await db.Get.UserByUserName(userName);
        if(user != null){
            res.json(user);
        }else{
            res.json({message:"User does not exist"})
        }
    }
);

//get projects by userId
apiRoutes.get("/api/user/:id/projects", 
    async (req,res) => {
        let userId = req.params.id;
        let projects = await db.Get.ProjectsByUserId(userId);        
        res.json(projects);
    }
);

//get project by id
apiRoutes.get("/api/project/:id", 
    async (req,res) => {
        let projId = req.params.id;
        let project = await db.Get.ProjectById(projId);
        res.json(project);
    }
);

//add collaborators to project
apiRoutes.post("/api/project/:id/collaborators/add", 
    async (res,req) => {
        let projectId = req.params.id;
        let collaboratorId = req.body;
        let dbRes = db.Update.AddCollaboraterToProject(projectId,collaboratorId);
        res.json(dbRes);
    }
);

//get mentor by user id
apiRoutes.get("/api/user/:id/mentor", 
    async (req, res) => {
        let userId = req.params.id;
        let mentor = await db.Get.MentorsByUserId(userId);
        res.json(mentor);
    }
);

//get mentees by user id
apiRoutes.get("/api/user/:id/mentees", 
    async (req, res) => {
        let userId = req.params.id;
        let mentees = await db.Get.MenteesByUserId(userId);
        res.json(mentees);
    }
);

//add project
apiRoutes.post("/api/project/add", 
    async (req, res) => {
        let project = req.body;
        let newProject = {
            owner: project.userId,
            name: project.title.trim(),
            tags: project.techList,
            externalLink: project.githubRepo.trim(),
            description: project.description 
        };
        let dbRes = db.Create.Project(newProject);
        res.json(dbRes);
    }
);

//update project
apiRoutes.post("/api/project/:id/update", 
    async (req, res) => {
        let projId = req.params.id;
        let project = req.body;
        let updatedProj = {
            owner: project.userId,
            name: project.name.trim(),
            tags: project.tags,
            externalLink: project.link.trim()
        };
        let dbRes = await db.Update.Project(projId, updatedProj);
        res.json(dbRes);
        }
);

//add comment to project
apiRoutes.post("/api/project/:id/:userid/comment", 
    async (req, res) => {
        let projId = req.params.id;
        let userId = req.params.userid;
        let comment = req.body.comment;
        let dbRes = await db.Update.AddCommentToProject(projId, userId, comment);
        res.json(dbRes);
    }
);

//add tags to project
apiRoutes.post("/api/project/:id/tags", 
    async (req, res) => {
        let projId = req.params.id;
        let tags = req.body.tags;
        let dbRes = await db.Update.AddTagsProject(projId, tags);
        res.json(dbRes);
    }
);


//delete user by id
apiRoutes.delete("/api/user/:id", 
    async (req, res) => {
        let userId = req.params.id;
        let dbRes = await db.Delete.UserById(userId);
        res.send(dbRes);
    }
);

//delete project by id
apiRoutes.delete("/api/project/:id", 
    async (req, res) => {
        let projId = req.params.id;
        let dbRes = await db.Delete.ProjectById(projId);
        res.send(dbRes);
    }
);

//create badge
apiRoutes.post("/api/badge/create", 
    async (req, res) => {
        let badge = req.body;
        let badgeInfo = {
            name: badge.name,
            level: badge.levelValue,
            description: badge.description,
            graphic: badge.source
        }
        let dbRes = await db.Create.Badge(badgeInfo);
        res.send(dbRes);
    }
);

//delete badge
apiRoutes.delete("/api/badge/:id/delete", 
    async (req, res) => {
        let badgeId = req.params.id;
        let dbRes = await db.Delete.BadgeById(badgeId);
        res.send(dbRes);
    }
);

//get badges
apiRoutes.get("/api/user/:id/badge", 
    async (req, res) => {
        let userId = req.params.id;
        let badges = await db.Get.BadgesByUserId(userId);
        res.json(badges);
    }
);

//create achievement
apiRoutes.post("/api/achivement/create", 
    async (req, res) => {
        let achievement = req.body;
        let achievementInfo = {
            name: achievement.name,
            level: achievement.levelValue,
            description: achievement.description,
            graphic: achievement.source
        }
        let dbRes = await db.Create.Achievement(achievement);
        res.send(dbRes);
    }
);

//delete achievement
apiRoutes.delete("/api/achievement/:id/delete", 
    async (req, res) => {
        let achieveId = req.params.id;
        let dbRes = await db.Delete.AchievementById(achieveId);
        res.send(dbRes);
    }
);

//get achievements
apiRoutes.get("/api/user/:id/achievement", 
    async (req, res) => {
        let userId = req.params.id;
        let achievements = db.Get.AchievementsByUserId(userId);
        res.json(achievements);
    }
);



module.exports = apiRoutes;