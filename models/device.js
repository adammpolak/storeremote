var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var Device_Type = require('./device_type');

var Device_Type_Schema = Device_Type.schema;

var deviceSchema = new Schema ({
  name: String,
  device_type: Device_Type_Schema,
});

var Device = mongoose.model('Device', deviceSchema);

module.exports = Device
