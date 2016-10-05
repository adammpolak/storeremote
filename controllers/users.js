var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

router.get('/', function(req,res){
  res.send('this is /users')
})

router.get('/signup', function(req,res){
  res.render('users/signup')
})

router.post('/signup', function(req,res){
  User.register(new User({
    username: req.body.username
  }), req.body.password, function(err,user){
    if (err) {
      return res.json({user:user});
    }
    res.redirect('/');
  });
});

router.post('/login', passport.authenticate('local'), function(req,res) {
  req.session.save(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/')
  })
})

module.exports = router
