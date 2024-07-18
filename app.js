const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
const controllersRouter = require("./routes/controllersRouter.js");

dotenv.config();
// dotenv.config({ path: process.env.NODE_ENV === "production" ? "./.env" : });

const uploadDir = path.join(process.cwd(), "public", "images");
// const storeImage = path.join(process.cwd(), 'images');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 1048576,
  },
});

const upload = multer({
  storage: storage,
});

const app = express();

const { DB_HOST, PORT } = process.env; // Из файла .env

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public");

app.use("/controllers", controllersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found 123" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

// Sergii     GeZ3SIUFrS09oG2P
// npm install mongoose --save
// npm i dotenv
// npm i jsonwebtoken

// npm install --save multer
// npm i gravatar
// npm i jimp
// npm i @sendgrid/mail
