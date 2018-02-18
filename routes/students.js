
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
  res.send('new forum');
};

exports.create = function(req, res){
  res.send('create forum');
};

exports.show = function(req, res){
  res.send('show forum ' + req.params.forum);
};

exports.edit = function(req, res){
  res.send('edit forum ' + req.params.forum);
};

exports.update = function(req, res){
  res.send('update forum ' + req.params.forum);
};

exports.destroy = function(req, res){
  res.send('destroy forum ' + req.params.forum);
};
