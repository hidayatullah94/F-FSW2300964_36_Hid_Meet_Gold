const express = require("express");
const { home, createRoom } = require("../controllers/Main");

const mainRoute = express.Router();
mainRoute.get("/", home);
mainRoute.get("/createRoom", createRoom);

module.exports = mainRoute;
