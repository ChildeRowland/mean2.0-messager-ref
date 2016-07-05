var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var schema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User'},
	content: { type: String, required: true}
});

schema.post('remove', function(doc) {
	var deletedMessage = doc;

	User.findById(doc.user, function(err, doc) {
		doc.messages.pull(deletedMessage);
		doc.save();
	})
});

module.exports = mongoose.model('Message', schema);
