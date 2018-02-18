
// How URL's map to methods :

// GET     /accounts           ->  index
// GET     /accounts/new       ->  new
// POST    /accounts           ->  create
// GET     /accounts/:id       ->  show
// GET     /accounts/:id/edit  ->  edit
// PUT     /accounts/:id       ->  update
// DELETE  /accounts/:id       ->  destroy

var mongoose = require('mongoose');
var Accounts = require('../models/accounts'); 
var dbConnection = require('../environment/db');

// mongoose.set('debug', true);

exports.index = function(req, res){
    mongoose.connect(dbConnection);
	Accounts.find((err, accounts) => {
    	if (err) {
    	    res.status(500).send(err)
    	} else {
    	    res.status(200).send(accounts);
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
