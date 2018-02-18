var mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
	name: 'string',
    email: 'string',
    isStaff: Boolean,
    role: 'string',
    organization: 'string'
});

var Accounts = mongoose.model('Accounts', schema);

module.exports = Accounts;
