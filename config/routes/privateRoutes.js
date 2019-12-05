const { celebrate: validate } = require('celebrate');
const Auth = require('../../api/middleware/Auth');
const transactionValidation = require('../../api/validations/transaction.validation');


const privateRoutes = {
	'POST /transaction/send': {
		path: 'TransactionController.send',
		middlewares: [validate(transactionValidation.createTransaction), Auth]
	}

};

module.exports = privateRoutes;
