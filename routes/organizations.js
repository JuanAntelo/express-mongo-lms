
// How URL's map to methods :

// GET     /organizations           ->  index
// GET     /organizations/new       ->  new
// POST    /organizations           ->  create
// GET     /organizations/:id       ->  show
// GET     /organizations/:id/edit  ->  edit
// PUT     /organizations/:id       ->  update
// DELETE  /organizations/:id       ->  destroy

var mongoose = require('mongoose');
var Organizations = require('../models/organizations');
var dbConnection = require('../environment/db');

// mongoose.set('debug', true);

exports.index = function(req, res){
    mongoose.connect(dbConnection);
	Organizations.find((err, organizations) => {
    	if (err) {
    	    res.status(500).send(err)
    	} else {
    	    res.status(200).send(organizations);
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