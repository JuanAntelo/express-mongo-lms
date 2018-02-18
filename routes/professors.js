
// How URL's map to methods :

// GET     /professors           ->  index
// GET     /professors/new       ->  new
// POST    /professors           ->  create
// GET     /professors/:id       ->  show
// GET     /professors/:id/edit  ->  edit
// PUT     /professors/:id       ->  update
// DELETE  /professors/:id       ->  destroy

var mongoose = require('mongoose');
var Professors = require('../models/professors');
var dbConnection = require('../environment/db');

// mongoose.set('debug', true);

exports.index = function(req, res){
    mongoose.connect(dbConnection);
	Professors.find((err, professors) => {
    	if (err) {
    	    res.status(500).send(err)
    	} else {
    	    res.status(200).send(professors);
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