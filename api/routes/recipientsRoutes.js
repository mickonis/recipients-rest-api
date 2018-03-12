'use strict';

module.exports = function(app) {
	var recipients = require('../controllers/recipientsController');

	app.route('/recipients')
		.get(recipients.list_all_recipients)
		.post(recipients.create_a_recipient);

	app.route('/recipients/:recipientId')
		.get(recipients.read_a_recipient)
		.put(recipients.update_a_recipient)
		.delete(recipients.delete_a_recipient);
};
