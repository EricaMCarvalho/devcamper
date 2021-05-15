const mongoose = require('mongoose');

module.exports = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB is connected: ${conn.connection.host}`.yellow.inverse);
};
