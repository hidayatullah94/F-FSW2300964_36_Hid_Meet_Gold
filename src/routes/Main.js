const express = require("express");
const {
  home,
  createRoom,
  bookings,
  createBooking,
  rooms,
  users,
  createUser,

} = require("../controllers/Main");

const mainRoute = express.Router();
mainRoute.get("/", home);
mainRoute.get("/booking", bookings);
mainRoute.get("/createBooking", createBooking);
mainRoute.get("/room", rooms);
mainRoute.get("/createRoom", createRoom);
mainRoute.get("/user", users);
mainRoute.get("/createUser", createUser);

module.exports = mainRoute;
