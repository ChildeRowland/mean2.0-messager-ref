var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
	res.render('index');
});

module.exports = router;


// router.get('/', function(req, res, next) {
// 	var email = '';
// 	User.findOne({}, function(err, doc){
// 		if (err) {
// 			return res.send('Error');
// 		}
// 		if (doc) {
// 			email = doc.email;
// 		}
// 		res.render('node', { email: email });
// 	});
// });

// router.post('/', function(req, res, next) {
// 	var email = req.body.email;
// 	var user = new User({
// 		firstName: "Taco",
// 		lastName: "Bean",
// 		password: "super-secret",
// 		email: email
// 	});
// 	user.save();
// 	res.redirect('/');
// });