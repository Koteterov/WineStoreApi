const express = require('express');
require("dotenv").config();



const { initializeDatabase } = require("./src/config/database");
const auth  = require("./src/middlewares/auth");
const cors = require('./src/middlewares/cors');
const wineController = require('./src/controllers/wineController');
const usersController = require('./src/controllers/usersController');
const orderController = require('./src/controllers/orderController');


const app = express();


const port = process.env.PORT

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(auth());
app.use(cors());

app.use('/data', wineController);
app.use('/data/cart', orderController);
app.use('/users', usersController);


initializeDatabase()
  .then(() => {
    app.listen(port, () => console.log(`Rest service is listening on port ${port}`));
  })
  .catch((err) => {
    console.log("Cannot connect to DB", err);
    return process.exit(1);

  });
