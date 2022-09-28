const User = require("../models/User");

exports.addOrder = async (userId, orderId) => {
  const user = await User.findById(userId);

  user.ordersHistory.push(orderId);
  await user.save();

  return user;
};

exports.getUserOrders = async (userId) =>
  await User.findById(userId).populate("ordersHistory");
