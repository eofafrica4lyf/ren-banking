const mongoose = require('../../config/mongo-database');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	lastName: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	middleName: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024
	},
	balance: {
		type: Number,
		required: true,
		default: 0.00
	},
	accountNumber: {
		type: String,
		required: true,
		minlength: 10,
		maxlength: 10,
		default: `${'2'+Math.floor(Math.random() * 1000000000)}`
	},
	bvn: {
		type: String,
		required: true,
		minlength: 9,
		maxlength: 9,
		default: `${Math.floor(Math.random() * 1000000000)}`
	},
	lastLogin: {
		type: Date,
		default: Date.now
	}
},
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
