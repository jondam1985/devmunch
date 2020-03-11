const db = require('../database/database');
const express = require("express");
const apiRoutes = express.Router();

const isAuthenticated = ()=>{
    return true;
}
apiRoutes.post("/api/singup",isAuthenticated,
    async (req,res)=>{
        let userName = req.body.userName;
        if(db.Get.UserExists(userName)){
            res.write("User already exists");
        }else{
            let user = {
                //userSchema;
            };
            let newUserId = db.Create.User(user);
            res.json(newUserId);
        }
    }
);

modules.exports.apiRoutes;