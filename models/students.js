var mongoose = require('mongoose');
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Students = mongoose.model('Students', schema);

module.exports = Students;
