var mongoose = require('mongoose');
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Accounts = mongoose.model('Accounts', schema);

module.exports = Accounts;
