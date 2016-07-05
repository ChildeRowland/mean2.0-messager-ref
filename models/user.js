var mongoose = require('mongoose');
Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String },
	email: { type: String, unique: true },
	password: { type: String },
	messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
})

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);