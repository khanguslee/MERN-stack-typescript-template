import  mongoose  from 'mongoose';

import config from '../config';

const mongooseOptions = { useNewUrlParser: true };
const connectDb = () => mongoose.connect(config.MONGODB_URI, mongooseOptions);

// TODO: Add mongoose models here
const models = {};

export { models, connectDb };
