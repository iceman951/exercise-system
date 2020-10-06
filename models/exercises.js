var mongo = require('mongodb');
var mongoose = require('mongoose');

var mongoDB = 'your mmongodb';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

//conncet
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connect Error'))

var exerciseSchema = mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    }
})

var Exercises = module.exports = mongoose.model('exercises', exerciseSchema)

module.exports.getExercises=function(callback,limit){
    Exercises.find(callback).limit(limit)
}