const mongoose = require("mongoose");

const connectionString = process.env.DB_HOST;

exports.initializeDatabase = () => {
  mongoose.connection.on("open", () => console.log("DB is connected"));


  return mongoose.connect(connectionString);
};
