const mongoose = require('../../config/mongo-database');

const transactionSchema = new mongoose.Schema({
	senderAccountNumber: {
		type: String,
		required: true,
		minlength: 10,
		maxlength: 10
	},
	receiverAccountNumber: {
		type: String,
		required: true,
		minlength: 10,
		maxlength: 10,
	},
	receiverName: {
		type: String,
		required: true
	},
	_sender: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User' 
	},
	amountSent: {
		type: Number,
		required: true,
	},
	transferMessage: {
		type: String,
		required: true
	}
},
	{
		timestamps: true
	});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
