const express = require("express");
const {
  createBooking,
  getAllBookings,
  getDetailBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/Booking");
const bookingRoute = express.Router();
bookingRoute.post("/booking-create", createBooking);
bookingRoute.get("/booking-all", getAllBookings);
bookingRoute.get("/booking-detail/:id", getDetailBooking);
bookingRoute.put("/booking-update/:id", updateBooking);
bookingRoute.delete("/booking-delete/:id", deleteBooking);
module.exports = bookingRoute;
