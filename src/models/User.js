const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email must be filled in!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password must be filled in!"],
  },

  ordersHistory: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Order",
    },
  ],
});


const User = mongoose.model("User", userSchema);

module.exports = User;
