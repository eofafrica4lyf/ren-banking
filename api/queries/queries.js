const mongoose = require('../../config/mongo-database');
let ObjectId = mongoose.Schema.Types.ObjectId;
const User = require('../models/User');
const Transaction = require('../models/Transaction');

class Queries {
	constructor(Model) {
		this.Model = Model;
	}

	create(payload) {
		return this.Model.create(payload);
	}

	findAll() {
		return this.Model.find();
	}

	findb

	findByIdOrFixtureUrl(id){
		return this.Model.findOne().or([{url: new RegExp(id)},{_id: id}])
	}

	findByHomeTeam(homeTeam) {
		return this.Model.findOne({ homeTeam });
	}

	findByAwayTeam(awayTeam) {
		return this.Model.findOne({ awayTeam });
	}

	findByHomeAndAwayTeams(payload) {
		return this.Model.findOne(payload);
	}

	findByEmail(email) {
		return this.Model.findOne({ email });
	}

	findByName(name) {
		return this.Model.findOne({ name });
	}

	findById(id) {
		return this.Model.findOne({ _id: id });
	}

	removeByName(name) {
		return this.Model.remove({ name });
	}

	removeById(id) {
		return this.Model.deleteOne({ _id: id });
	}

	update(id, payload) {
		return this.Model.updateOne({ _id: id }, payload);
	}
}

const UserQuery = new Queries(User);
const TransactionQuery = new Queries(Transaction);

module.exports = {
	UserQuery,
	TransactionQuery,
};
