import express from "express";
import { getDrlList } from "../controllers/contacts/index.js";
import { protect } from "../middlewares/index.js";

const controllersRouter = express.Router();

//controllersRouter.use(protect);
controllersRouter.get("/drl", getDrlList);

export default controllersRouter;
