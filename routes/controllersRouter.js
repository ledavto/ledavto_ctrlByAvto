import express from "express";
import { addDrlCtrl, addLongPovCtrl, getDrlCtrl } from "../controllers/index.js";

const controllersRouter = express.Router();

//controllersRouter.use(protect);
controllersRouter.get("/drl", getDrlCtrl);
controllersRouter.post("/drl", addDrlCtrl);

//controllersRouter.get("/long_pov", getDrlCtrl);
controllersRouter.post("/long_pov", addLongPovCtrl);



export default controllersRouter;
