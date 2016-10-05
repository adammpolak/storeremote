var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Device = require('../models/device')

router.get('/', function(req,res) {
  Device.find({}, function(err, users){
    res.render('devices/index', {devices: users})
  });
});

router.get('/new', function(req,res){
  res.render('devices/new')
});

router.post('/new', function(req,res){
  var device = new Device ({
    name: req.body.name,
  });
  device.save(function(err,user){
    res.redirect('/devices');
  });
});

module.exports = router;
