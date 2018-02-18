
// How URL's map to methods :

// GET     /classes           ->  index
// GET     /classes/new       ->  new
// POST    /classes           ->  create
// GET     /classes/:id       ->  show
// GET     /classes/:id/edit  ->  edit
// PUT     /classes/:id       ->  update
// DELETE  /classes/:id       ->  destroy

var mongoose = require('mongoose');
var Classes = require('../models/classes');
var dbConnection = require('../environment/db');

// mongoose.set('debug', true);

exports.index = function(req, res){
    mongoose.connect(dbConnection);
	Classes.find((err, classes) => {
    	if (err) {
    	    res.status(500).send(err)
    	} else {
    	    res.status(200).send(classes);
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