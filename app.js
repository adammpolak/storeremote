var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var logger = require('morgan');

var hbs = require('hbs');
require('handlebars-form-helpers').register(hbs.handlebars);
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var User = require('./models/user');
var usersController = require('./controllers/users');
var devicesController = require('./controllers/devices');
var device_typesController = require('./controllers/device_types');
var control_typesController = require('./controllers/control_types');
var select_optionsController = require('./controllers/select_options');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/remote';
mongoose.connect(mongoURI)
var app = express()

app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/users', usersController);
app.use('/devices', devicesController)
app.use('/device_types', device_typesController);
// app.use('/control_types', control_typeController);
// app.use('/select_options', select_optionController);

app.get('/', function(req,res){
  if (req.user) {
    res.redirect('/devices');
  } else {
  res.render('home')}
});

app.listen(process.env.PORT || 3000)
