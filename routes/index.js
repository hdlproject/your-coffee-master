var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('Hello, I am your-coffee-master backend!');
});

module.exports = router;
