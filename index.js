const mongoose = require('mongoose');
const express = require('express');


const { initializeDatabase } = require("./src/config/database");
const { auth } = require("./src/middlewares/auth");
const cors = require('./src/middlewares/cors');
const wineController = require('./src/controllers/wineController');
const usersController = require('./src/controllers/usersController');


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(auth);
app.use(cors());

app.use('/data', wineController);
app.use('/users', usersController);


initializeDatabase()
  .then(() => {
    app.listen(3030, () => console.log("Rest service is listening on port 3030"));
  })
  .catch((err) => {
    console.log("Cannot connect to DB", err);
    return process.exit(1);

  });
