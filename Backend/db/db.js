const mongoose = require('mongoose');

async function connectToDb() {
  const dbUri = process.env.MONGO_URI || 'mongodb+srv://suchanakamilya:1EHbGdFbF8kfxse5@cluster0.9ctcz.mongodb.net/uber-clone?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
  try {
    await mongoose.connect(dbUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if the connection fails
  }
}

module.exports = connectToDb;
