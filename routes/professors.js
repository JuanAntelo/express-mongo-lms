
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