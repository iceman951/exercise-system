var express = require('express');
var router = express.Router();
var Exercises = require('../models/exercises')

/* GET home page. */
router.get('/', function(req, res, next) {
  Exercises.getExercises(function(err,exercises){
    res.render('index', { exercises: exercises });
  })
});

module.exports = router;
