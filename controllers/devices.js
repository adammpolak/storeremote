var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Device = require('../models/device')
var Device_Type = require('../models/device_type')

router.get('/', function(req,res) {
  Device.find({}, function(err, devices){
    res.render('devices/index', {devices: devices})
  });
});

router.get('/new', function(req,res){
  Device_Type.find({}, function(err, device_types){
    res.render('devices/new', {device_types: device_types})
  });
});

router.post('/new', function(req,res){
  Device_Type.findOne({_id: req.body.device_type_id}, function(err,device_type){
    var device = new Device ({
      name: req.body.name,
      device_type: device_type,
  });
  device.save(function(err,user){
  });
    res.redirect('/devices');
  });
});

module.exports = router;
