const { Joi } = require('celebrate');

module.exports = {
	// POST /api/v1/public/user/signup
	createUser: {
		body: {
			firstName: Joi.string()
				.max(200)
				.required(),
			middleName: Joi.string()
				.max(200)
				.required(),
			lastName: Joi.string()
				.max(200)
				.required(),
			email: Joi.string()
				.email()
				.max(200)
				.required(),
			password: Joi.string()
				.min(6)
				.max(255)
				.required(),
			password2: Joi.string()
				.min(6)
				.max(255)
				.required(),
			balance: Joi.number()
				.default(0.00),
			accountNumber: Joi.string()
				.min(10)
				.max(10),
			bvn: Joi.string()
				.min(9)
				.max(9),
			lastLogin: Joi.date()
		}
	},
	// POST /api/v1/public/admin/signup
	createAdmin: {
		body: {
			name: Joi.string()
				.max(200)
				.required(),
			email: Joi.string()
				.email()
				.max(200)
				.required(),
			password: Joi.string()
				.min(6)
				.max(255)
				.required(),
			password2: Joi.string()
				.min(6)
				.max(255)
				.required(),
			isAdmin: Joi.boolean().default(true)
		}
	}
};
