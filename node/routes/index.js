var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Git! This is a change in the 2nd branch.' });
});

module.exports = router;
