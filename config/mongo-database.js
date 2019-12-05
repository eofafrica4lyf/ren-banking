const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
require('dotenv').config();
 mongoose
	.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	// .connect('mongodb://localhost/ren-banking', { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB Atlas!'))
	.catch(err => console.error('Could not connect to MongoDB Atlas...', err));

	module.exports = mongoose;
