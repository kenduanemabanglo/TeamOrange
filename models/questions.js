var mongoose = require('mongoose');
var Data = mongoose.Schema;

const QuestionData = new Data({
    number: Number,
    question: String,
    answer: String,
    options: Array
});

module.exports = mongoose.model('Questions', QuestionData);