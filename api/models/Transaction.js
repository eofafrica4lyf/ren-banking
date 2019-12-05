const mongoose = require('../../config/mongo-database');

const transactionSchema = new mongoose.Schema({
	senderAccountNumber: {
		type: String,
		required: true,
		minlength: 10,
		maxlength: 10,
	},
	receiverAccountNumber: {
		type: String,
		required: true,
		minlength: 10,
		maxlength: 10,
	},
	amountSent: {
		type: Number,
		required: true,
	}
},
	{
		timestamps: true
	});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
