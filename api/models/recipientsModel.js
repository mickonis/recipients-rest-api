'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipientSchema = new Schema({
  firstName: String ,
  lastName: String ,
  businessName: String,
  country: String,
  recipientType: String
});


module.exports = mongoose.model('Recipients', RecipientSchema);