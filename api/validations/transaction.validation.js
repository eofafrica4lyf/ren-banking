const { Joi } = require('celebrate');

module.exports = {
	// POST /api/v1/private/transaction/create
	createTransaction: {
		body: {
			nasenderAccountNumberme: Joi.string()
				.min(10)
				.max(10)
				.required(),
			receiverAccountNumber: Joi.string()
				.min(10)
				.max(10)
				.required(),
			amountSent: Joi.number()
				.required()
		}
	}
};
