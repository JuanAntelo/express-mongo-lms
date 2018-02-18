var mongoose = require('mongoose');
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Professors = mongoose.model('Professors', schema);

module.exports = Professors;
