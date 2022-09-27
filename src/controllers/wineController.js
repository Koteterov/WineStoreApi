const router = require("express").Router();

const api = require("../services/wineService");

router.get("/wines", async (req, res) => {
  try {
    res.json(await api.getAll(req.query.where));
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
});

router.get("/wines/:id", async (req, res) => {
    try {
        res.json(await api.getOneById(req.params.id))
    } catch (err) {
        res.status(400).json({ message: "Bad request" });
 
    }
});

module.exports = router;
