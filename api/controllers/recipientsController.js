'use strict';

var mongoose = require('mongoose'),
  Recipient = mongoose.model('Recipients');



exports.list_all_recipients = function(req, res) {
  Recipient.find({}, function(err, recipient) {
    if (err)
      res.send(err);
    res.json(recipient);
  });
};


exports.create_a_recipient = function(req, res) {
  var new_recipient = new Recipient(req.body);
  new_recipient.save(function(err, recipient) {
    if (err)
      res.send(err);
    res.json(recipient);
  });
};

exports.read_a_recipient = function(req, res) {
  Recipient.findById(req.params.recipientId, function(err, recipient) {
    if (err)
      res.send(err);
    res.json(recipient);
  });
};

exports.update_a_recipient = function(req, res) {
  Recipient.findOneAndUpdate({_id:req.params.recipientId}, req.body, {new: true}, function(err, recipient) {
    if (err)
      res.send(err);
    res.json(recipient);
  });
};
// Recipient.remove({}).exec(function(){});
exports.delete_a_recipient = function(req, res) {

  Recipient.remove({
    _id: req.params.recipientId
  }, function(err, recipient) {
    if (err)
      res.send(err);
    res.json({ message: 'Recipient successfully deleted' });
  });
};
