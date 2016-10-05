var express = require('express');
var router = express.Router();
var Device_Type = require('../models/device_type')

router.get('/', function(req,res) {
  Device_Type.find({}, function(err, device_types){
    res.render('device_types/index', {device_types: device_types})
  });
});

router.get('/new', function(req,res) {
  res.render('device_types/new')
});

router.post('/new', function(req,res){
  var device_type = new Device_Type ({
    name: req.body.name,
  });
  device_type.save(function(err,user){
    res.redirect('/device_types');
  });
});

module.exports = router;
