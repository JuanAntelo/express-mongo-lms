var mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
	accountID: 'string',
    currentClassesAuthForGrading: [String]
});

var Professors = mongoose.model('Professors', schema);

module.exports = Professors;
