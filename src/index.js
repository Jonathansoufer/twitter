const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:criticall23@cluster0-bktdr.mongodb.net/goweek?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
app.use(routes);
app.use(express.json());

app.listen(3000, () => {
  console.log("Server Started.");
});
