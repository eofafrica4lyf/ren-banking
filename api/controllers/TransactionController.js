const httpStatus = require('http-status');
const sendResponse = require('../../helpers/response');
const { UserQuery, TransactionQuery } = require('../queries/queries');
const mongoose = require('../../config/mongo-database');
const User = require("../models/User");

const TransactionController = () => {

	const checkReceiver = async (req, res, next) => {
		try {
			const { senderAccountNumber, receiverAccountNumber } = req.body;
			const receiver = await UserQuery.findByAccountNumber(receiverAccountNumber);
			console.log(req.body);

			if (receiver) {
				const { firstName, middleName, lastName } = receiver;
				return res.json(sendResponse(httpStatus.OK, 'success', { firstName, middleName, lastName }, null));
			} else {
				return res.json(sendResponse(httpStatus.NOT_FOUND, 'failure', {}, null));
			}
		} catch (err) {
			next(err);
		}
	}

	const send = async (req, res, next) => {
		try {
			console.log(req.body);

			const { senderAccountNumber, receiverAccountNumber, amountSent, transferMessage } = req.body;

			const receiver = await UserQuery.findByAccountNumber(receiverAccountNumber);
			const sender = await UserQuery.findByAccountNumber(senderAccountNumber);
			console.log(receiver);
			console.log(sender);
			if (sender.balance < amountSent) {
				return res.json(sendResponse(httpStatus.OK, 'failure', { message: "You do not have enough balance!" }, null));
			}
			sender.balance = sender.balance - amountSent;
			receiver.balance = receiver.balance + amountSent;
			delete sender.password;
			delete receiver.password;
			console.log(sender.balance, receiver.balance);

			//Run a transaction
			let session = null;
			return User.createCollection().
				then(() => mongoose.startSession()).
				then(_session => {
					session = _session;
					session.startTransaction();
					return User.updateOne(
						{ accountNumber: senderAccountNumber },
						{ balance: sender.balance },
						{ session: session }
					)
				}).
				then(() => {
					return User.updateOne(
						{ accountNumber: receiverAccountNumber },
						{ balance: receiver.balance },
						{ session: session }
					)
				}).
				then(() => session.commitTransaction()).
				then(()=> res.json(sendResponse(httpStatus.OK, 'success', sender, null)))
		} catch (err) {
			next(err);
		}
	};


	return {
		checkReceiver,
		send
	};
};

module.exports = TransactionController;
