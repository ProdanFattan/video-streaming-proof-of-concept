import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.get("/", function (req, res) {
  res.json({ message: "Hello World..." });
});

app.listen(3000, function () {
  console.log("This App listening on port 3000!");
});
