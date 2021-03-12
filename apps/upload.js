const express = require("express");
const app = express();

const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({ storage });

app.post("/api/fileanalyse", upload.single("upfile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.json({ name: file.originalname, type: file.mimetype, size: file.size });
});
module.exports = app;
