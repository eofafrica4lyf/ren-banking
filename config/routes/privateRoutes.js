const { celebrate: validate } = require('celebrate');
const Auth = require('../../api/middleware/Auth');
const transactionValidation = require('../../api/validations/transaction.validation');


const privateRoutes = {
	'POST /transaction/send': {
		path: 'TeamController.create',
		middlewares: [validate(transactionValidation.	createTransaction: {
			), Auth]
	}

};

module.exports = privateRoutes;
