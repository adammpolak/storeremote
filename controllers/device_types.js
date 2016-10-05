var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  res.render('device_types/index');
});

router.get('/new', function(req,res) {
  res.render('device_types/new')
})

module.exports = router;
