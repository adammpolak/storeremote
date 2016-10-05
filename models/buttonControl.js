var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ButtonControlSchema = new Schema ({
  name: String,
  httpverb: String,
  httpurl: String,
  value: Boolean,
})

var ButtonControl = mongoose.model('ButtonControl', ButtonControlSchema);

module.exports = ButtonControl;
