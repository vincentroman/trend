var express = require('express');
var router = express.Router();

router.all('*', function(req, res, next) {
	res.render('index', {
		title: 'Trendit | The fastest way to anything Trend ',
		css:
			process.env.NODE_ENV == 'PRODUCTION'
				? '/css/styles.min.css'
				: '/css/styles.css',
	});
});

module.exports = router;
