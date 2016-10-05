var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var device_typeSchema = new Schema ({
  name: String,
  api: String,
  controls: [],
})

var Device_Type = mongoose.model('Device_Type', device_typeSchema);

module.exports = Device_Type;
