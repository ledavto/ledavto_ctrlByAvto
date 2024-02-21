import express from "express";
import { addDrlCtrl, getDrlCtrl } from "../controllers/index.js";

const controllersRouter = express.Router();

//controllersRouter.use(protect);
controllersRouter.get("/drl", getDrlCtrl);
controllersRouter.post("/drl", addDrlCtrl);

export default controllersRouter;
