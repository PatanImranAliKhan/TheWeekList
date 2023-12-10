const express = require('express');

const WeekListRouter = express.Router();

WeekListRouter.route('/').get((req,res) => {

});

module.exports = WeekListRouter;