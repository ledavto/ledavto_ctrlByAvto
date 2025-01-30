const express = require("express");
const {
  addDrlCtrl,
  addLongPovCtrl,
  getDrlCtrl,
} = require("../controllers/index.js");

const controllersRouter = express.Router();

//controllersRouter.use(protect);
controllersRouter.get("/drl", getDrlCtrl);
controllersRouter.post("/drl", addDrlCtrl);

//controllersRouter.get("/long_pov", getDrlCtrl);
controllersRouter.post("/long_pov", addLongPovCtrl);

module.exports = controllersRouter;
