var mongoose = require('mongoose');
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Classes = mongoose.model('Classes', schema);

module.exports = Classes;
