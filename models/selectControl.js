var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var SelectOption = require('./select_option')

var SelectControlSchema = new Schema ({
  name: String,
  httpverb: String,
  httpurl: String,
  value: String,
  options: [SelectOption],
})

var SelectControl = mongoose.model('SelectControl', SelectControlSchema);

module.exports = SelectControl;
