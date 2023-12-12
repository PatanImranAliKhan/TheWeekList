const express = require("express");

const UserRouter = express.Router();
const UserModel = require('../models/UserModel');

const { singIn, validatetoken } = require('./JWTUtils.js');

UserRouter.route('/login/:email/:password').get(async (req,res) => {
    const email = req.params.email;
    const password = req.params.password;
    if(email==null || password==null) {
        return res.status(400).json({"Message":"Invalid Credentials Provided"});
    }
    try {
        const user = await UserModel.findOne({email: email, password: password}).select("-password");
        if(user==undefined || user == null) {
            return res.status(400).json({"Message":"Invalid Credentials Provided"});
        }
        const token = singIn(user);
        if(token == "Error") {
            return res.status(400).json({"Message":"Error while generating JQT token"});
        }
        return res.status(200).json({"Message":"Successfully Loggedin", "token": token});
    } catch {
        return res.status(400).json({"Message":"Invalid Credentials Provided"});
    }
})

UserRouter.route('/signup').post(async (req,res) => {
    const userDetails = req.body;
    if(userDetails == null) {
        return res.status(400).json({"Message":"provide Valid Details"});
    }
    try {
        const user = await UserModel.create(user).select("-password");
        if(user == null) {
            return res.status(400).json({"Message":"Invalid data provided"})
        }
        const token = singIn(user);
        if(token == "Error") {
            return res.status(400).json({"Message":"Error while generating JQT token"});
        }
        return res.status(200).json({"Message":"Successfully Signedup", "token": token});
    } catch {
        return res.status(400).json({"Message":"Exception at Signup"})
    }
})

module.exports = UserRouter;