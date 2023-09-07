const express = require("express");
const { createBooking } = require("../controllers/Booking");
const bookingRoute = express.Router();
bookingRoute.post("/booking-create", createBooking);
bookingRoute.get("/");
bookingRoute.get("/:id");
bookingRoute.put("/:id");
bookingRoute.delete("/:id");
module.exports = bookingRoute;
