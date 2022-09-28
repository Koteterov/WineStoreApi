const router = require("express").Router();

const api = require("../services/wineService");
const userService = require("../services/userService");


router.get("/", async (req, res) => {
    try {
      const userOrders = await userService.getUserOrders(req.user._id);
      res.json(userOrders.ordersHistory);
  
      // const allOrders = await api.getAllOwnOrders(req.query.where)
      // res.json(allOrders);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Bad request" });
    }
  });
  
  router.post("/", async (req, res) => {
    const data = req.body;
    try {
      const createdOrder = await api.creatOrder({ ...data, user: req.user._id });
      await userService.addOrder(req.user._id, createdOrder);
      res.json(createdOrder);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Bad request" });
    }
  });
  

module.exports = router;
