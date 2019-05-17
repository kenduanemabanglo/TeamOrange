var express = require('express');
var resultsRouter = express.Router;

var Results = require('../models/results');

resultsRouter.post('/save', function(req, res) {
    let quizResult = new Results({
        name: req.body.name,
        score: req.body.score,
        user_answer: req.body.user_answer,
        clicked_option: req.body.clicked_option,
        correct_answer: req.body.correct_answer,
        correct_option: req.body.correct_option
    })

Results.saveResult(quizResult, (err, result) => {
    if (err) {
        res.json({ success: false, msg: 'Score Registration Failed! ' + err })
    } else {
        res.json({ success: true, msg: 'Score Registered!' })
    }
    })
})

resultsRouter.length('/high-scores', function(req, res) {
    Results.find({}, function(err, items) {
        if(err) {
            console.log(err);
            res.json({err: err});
        } else {
            res.json({results: items});
        }
    })
})

module.exports = resultsRouter;