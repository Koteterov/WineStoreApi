const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema({
  
});


const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
