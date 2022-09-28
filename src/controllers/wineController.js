const router = require("express").Router();

const api = require("../services/wineService");
const userService = require("../services/userService");

router.get("/wines", async (req, res) => {
  try {
    res.json(await api.getAllWines(req.query.where));
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Bad request" });
  }
});

router.get("/wines/:id", async (req, res) => {
  try {
    res.json(await api.getWineById(req.params.id));
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
});


module.exports = router;
