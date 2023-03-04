var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'aman KHYS KING...ALL HAIL HIM... ',req: `${req._read()}` });
});

module.exports = router;
