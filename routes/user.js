var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function (req, res, next) {
	var user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: passwordHash.generate(req.body.password)
	});

	user.save(function(err, result) {
		if (err) {
			return res.status(404).json({
				message: 'An error occured',
				error: err
			});
		}
		res.status(200).json({
			message: 'User created',
			obj: result
		});
	});
});

router.post('/signin', function (req, res, next) {
	User.findOne({ email: req.body.email }, function(err, doc) {
		if (err) {
			return res.status(404).json({
				message: 'An error occured',
				error: err
			});
		}
		if (!doc) {
			return res.status(404).json({
				message: 'User not found',
				error: { message: 'No user found with that email' }
			});
		}
		if (!passwordHash.verify(req.body.password, doc.password)) {
			return res.status(401).json({
				message: 'An error occured',
				error: { message: 'Incorrect credentials' }
			});
		}
		var token = jwt.sign({user: doc}, 'theoldmanandthesea', {expiresIn: 7200});
		res.status(200).json({
			message: 'User signed in',
			token: token,
			userId: doc._id
		});
	});
});


module.exports = router;