var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var deviceSchema = new Schema ({
  name: String,
});

var Device = mongoose.model('Device', deviceSchema);

module.exports = Device
