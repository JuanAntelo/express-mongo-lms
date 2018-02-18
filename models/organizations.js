var mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
    name: 'string',
    code: 'string',
    address: 'string',
    contacts: [{
    	name: 'string',
    	number: 'string'
    }]
});

var Organizations = mongoose.model('Organizations', schema);

module.exports = Organizations;
