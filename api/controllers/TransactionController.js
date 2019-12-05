const httpStatus = require('http-status');
const sendResponse = require('../../helpers/response');
const { TransactionQuery } = require('../queries/queries');

const TransactionController = () => {
	const send = async (req, res, next) => {
		try {
			const { senderAccountNumber, receiverAccountNumber, amountSent } = req.body;

			const receiverExists = await TransactionQuery.findByName(name);

			if (teamExist) {
				return res.json(
					sendResponse(
						httpStatus.BAD_REQUEST,
						'team name has already been registered',
						{},
						{ email: 'team name has already been registered' }
					)
				);
			}
			const teamObject = {
				name,
				stadium,
				coach
			};

			const team = await TransactionQuery.create(teamObject);
			return res.json(sendResponse(httpStatus.OK, 'success', team, null));
		} catch (err) {
			next(err);
		}
  };

	return {
    send
	};
};

module.exports = TransactionController;
