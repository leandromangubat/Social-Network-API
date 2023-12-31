const { connect, connection } = require("mongoose");

connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network-API",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = connection;
