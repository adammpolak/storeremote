var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var control_typeSchema = new Schema ({
  name: String,
})

var Control_Type = mongoose.model('Control_Type', control_typeSchema);

module.exports = Control_Type;
