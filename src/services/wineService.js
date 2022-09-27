const Wine = require("../models/Wine");

async function getAll(query) {
  if (query) {
    const userId = query.split("=")[1].slice(1, -1);
    return Wine.find({ _ownerId: userId });
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
