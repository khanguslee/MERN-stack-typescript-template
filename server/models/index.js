const mongoose = require('mongoose');

const config = require('../config');

const mongooseOptions = { useNewUrlParser: true };
const connectDb = () => mongoose.connect(config.MONGODB_URI, mongooseOptions);

// TODO: Add mongoose models here
const models = {};
module.exports = { models, connectDb };
