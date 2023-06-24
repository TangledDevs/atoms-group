import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendMail } from "./controllers/sendMail.js";

const app = express();
app.use(express.json())
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Up and running" });
});

app.post("/mail", sendMail);

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
