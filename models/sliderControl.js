var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var SelectOption = require('./select_option')

var SliderControlSchema = new Schema ({
  name: String,
  httpverb: String,
  httpurl: String,
  value: Number,
})

var SliderControl = mongoose.model('SliderControl', SliderControlSchema);

module.exports = SliderControl;
