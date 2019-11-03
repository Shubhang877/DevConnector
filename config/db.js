const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connetDB = async () => {
  try {
    await mongoose.connect(
      db,

      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    console.log('Mongo DB Connected....');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connetDB;
