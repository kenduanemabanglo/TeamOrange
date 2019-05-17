var express = require('express');
var quizRouter = express.Router();

var quizQuestionsModel = require('../models/questions');

quizRouter.get('/', function(req, res) {
    quizQuestionsModel.find({}, function (err, items) {
        if(err) {
            console.log(err);
            res.json({err: err});
        } else {
            res.json({questions: items});
        }
    });
});

module.exports = quizRouter;