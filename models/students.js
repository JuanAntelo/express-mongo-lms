var mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
	name: 'string',
    accountID: 'string',
    organization: 'string',
    friendsByAccountID: [Number],
    currentenrolledClasses: [String],
    completedClassesByID: [Number] 
});

var Students = mongoose.model('Students', schema);

module.exports = Students;
