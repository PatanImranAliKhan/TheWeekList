const express = require("express");

const UserRouter = express.Router();
const UserModel = require('../models/UserModel');

const { singIn, validatetoken } = require('./JWTUtils.js');

UserRouter.route('/').get((req,res) => {
    
})

module.exports = UserRouter;