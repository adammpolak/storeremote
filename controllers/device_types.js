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
    api: req.body.api,
    controls: req.body.controls,
  });
  console.log(req.body);
  console.log(req.body.controls);
  device_type.save(function(err,user){
    // res.redirect('/device_types');
  });
});
router.get('/:id', function(req,res){
  Device_Type.findOne({_id: req.params.id}, function(err,device_type){
    res.render('device_types/show', {device_type:device_type})
  });
});

module.exports = router;
