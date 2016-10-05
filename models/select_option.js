var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var select_optionSchema = new Schema ({
  name: String,
})

var Select_Option = mongoose.model('Select_Option', select_optionSchema);

module.exports = Select_Option;
