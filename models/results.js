var mongoose = require('mongoose');
var Data = mongoose.Schema;

const ResultData = new Data({
    name: String,
    score: Number,
    user_answer: String,
    clicked_option: Array,
    correct_answer: String,
    correct_option: Array,
});

const Results = module.exports = mongoose.model('Results', ResultData);

module.exports.getResultsByName = function(name, callback) {
    var query = {name: name}
    Results.find(query, callback);
}

module.exports.saveResult = function(quizResult, callback) {
    quizResult.save(callback);
}