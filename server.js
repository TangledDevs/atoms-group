import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import process from "process";
import { sendMail } from "./controllers/sendMail.js";
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Up and running" });
});

app.get("/mail", sendMail);

const start = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server Up and running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
