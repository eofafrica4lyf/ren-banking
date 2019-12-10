const { Joi } = require('celebrate');

module.exports = {
	// POST /api/v1/private/transaction/create
	createTransaction: {
		body: {
			senderAccountNumber: Joi.string()
				.min(10)
				.max(10)
				.required(),
			receiverAccountNumber: Joi.string()
				.min(10)
				.max(10)
				.required(),
			receiverName: Joi.string(),
			amountSent: Joi.number()
				.required(),
			transferMessage: Joi.string()
				.required(),
			_sender: Joi.string()
		}
	}
};
