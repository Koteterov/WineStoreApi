const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema({
  name: { type: String },
  origin: { type: String },
  type: { type: String },
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
