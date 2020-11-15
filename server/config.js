// TODO: Edit collection name
const collectionName = 'mern-stack-template';
const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost:27017/${collectionName}`;

module.exports = {
  MONGODB_URI,
};
