import express from "express";
import {
  currentUserCtrl,
  editAvatar,
  loginUserCtrl,
  logoutUserCtrl,
  registerUserCtrl,
  verifyUserEmailCtrl,
  reSendVerifyEmail,
} from "../controllers/user/index.js";
import { protect, uploadAvatar } from "../middlewares/index.js";
import { validateBody } from "../helpers/index.js";
import { schema } from "../models/drlSchema.js";

const usersRouter = express.Router();

usersRouter
  .post("/register", registerUserCtrl)
  .post("/login", loginUserCtrl)
  .post("/logout", logoutUserCtrl)
  .get("/current", protect, currentUserCtrl)
  .patch("/avatars", protect, uploadAvatar, editAvatar)
  .get("/verify/:verificationToken", verifyUserEmailCtrl)
  .post("/verify", validateBody(schema.reSendVerifySchema), reSendVerifyEmail);

export default usersRouter;
