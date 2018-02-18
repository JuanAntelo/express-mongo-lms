var mongoose = require('mongoose');
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Organizations = mongoose.model('Organizations', schema);

module.exports = Organizations;
