
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order: {
    type: String,
  },

  user: 
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  
});


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
