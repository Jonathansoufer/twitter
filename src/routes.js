const express = require("express");
const routes = express.Router();

const TweetController = require("./controllers/TweetController.js");

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

module.exports = routes;
