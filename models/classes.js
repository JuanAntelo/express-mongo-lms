var mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
	name: 'string',
    organizationID: 'string',
    code: 'string',
    description: 'string',
    prereqs: [String],
    semestersActive: [String]
});

var Classes = mongoose.model('Classes', schema);

module.exports = Classes;
