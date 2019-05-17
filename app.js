var express = require('express');
var path = require('path');
var parser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var homepage = 'public/index.html';

var quizRouter = require('./routes/quizzer-routes');
var resultsRouter = require('./routes/results-routes');
var database = require('./config/database');

var teamOrangeQuizzer = express();
var teamOrangeQuizzerPort = process.env.port || 5000;

mongoose.connection.on('Connection error',(err) => {
    console.log('Database connection error:' + err);
});

teamOrangeQuizzer.use(cors());
teamOrangeQuizzer.use(parser.json());
teamOrangeQuizzer.use(express.static(path.join(__dirname, 'public')));
teamOrangeQuizzer.listen(teamOrangeQuizzerPort, function () {
    console.log('Quiz is available on port: ' + port)
});

teamOrangeQuizzer.use('/api/quiz', quizRouter);
teamOrangeQuizzer.use('/api/scores', resultsRouter);

teamOrangeQuizzer.get('/', (req, res) => {
    res.send('Error: Unable to find files.');
});

teamOrangeQuizzer('*', (req, res) => {
    res.sendFile(path.join(__dirname, homepage));
});
