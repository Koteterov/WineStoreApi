const Wine = require("../models/Wine");
const Order = require("../models/Order");


async function getAllWines(query) {
  if (query) {
    const wineType = query.split("=")[1].slice(1, -1);

    return Wine.find({ type: wineType });
  }
  return Wine.find({});
}

async function getWineById(id) {
  return Wine.findById(id);
}


async function getAllOwnOrders(query) {
  if (query) {
    const userId = query.split("=")[1].slice(1, -1);

    return Order.find({ user: userId });
  }
  return Order.find({});
}

async function creatOrder(order) {
  return Order.create(order)
}


module.exports = {
  getAllWines,
  getWineById,
  getAllOwnOrders,
  creatOrder,
};
