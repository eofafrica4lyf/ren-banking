const { celebrate: validate } = require('celebrate');
const paramValidation = require('../../api/validations/user.validation');

const publicRoutes = {
	'POST /user/signup': {
		path: 'UserController.register',
		middlewares: [validate(paramValidation.createUser, { abortEarly: false })]
	},

	'POST /user/login': 'UserController.login',

};

module.exports = publicRoutes;
