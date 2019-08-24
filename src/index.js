const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://omnistack:criticall23@cluster0-bktdr.mongodb.net/goweek?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server Started.");
});
