var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.send('response with a resource');
    res.render('users');
  })
  .post(function (req, res) {
    res.send('updating resource');
  });

module.exports = router;
