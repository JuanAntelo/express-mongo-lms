
// How URL's map to methods :

// GET     /students           ->  index
// GET     /students/new       ->  new
// POST    /students           ->  create
// GET     /students/:id       ->  show
// GET     /students/:id/edit  ->  edit
// PUT     /students/:id       ->  update
// DELETE  /students/:id       ->  destroy

var mongoose = require('mongoose');
var Students = require('../models/students');
var dbConnection = require('../environment/db');

// mongoose.set('debug', true);

exports.index = function(req, res){
    mongoose.connect(dbConnection);
	Students.find((err, students) => {
    	if (err) {
    	    res.status(500).send(err)
    	} else {
    	    res.status(200).send(students);
    	}
	});
};

exports.new = function(req, res){
  res.send('not yet implemented');
};

exports.create = function(req, res){
  res.send('not yet implemented');
};

exports.show = function(req, res){
  res.send('not yet implemented');
};

exports.edit = function(req, res){
  res.send('not yet implemented');
};

exports.update = function(req, res){
  res.send('not yet implemented');
};

exports.destroy = function(req, res){
  res.send('not yet implemented');
};
