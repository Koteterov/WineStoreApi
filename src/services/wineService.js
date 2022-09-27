const Wine = require("../models/Wine");

async function getAll(query) {
  if (query) {
    const wineType = query.split("=")[1].slice(1, -1);

    return Wine.find({ type: wineType });
  }
  return Wine.find({});
}

async function getOneById(id) {
  return Wine.findById(id);
}

module.exports = {
  getAll,
  getOneById,
};
