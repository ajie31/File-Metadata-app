var express = require("express");
var cors = require("cors");
require("dotenv").config();
const upload = require("./apps/upload");
var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});
app.use((req, res, next) => {
  upload(req, res, next);
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
