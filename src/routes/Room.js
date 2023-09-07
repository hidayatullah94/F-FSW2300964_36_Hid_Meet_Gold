const express = require("express");
const {
  getAllRooms,
  createRoom,
  getDetailRoom,
  deleteRoom,
  editRoom,
} = require("../controllers/Room");
const roomRoute = express.Router();
roomRoute.post("/room-create", createRoom);
roomRoute.get("/room-all", getAllRooms);
roomRoute.get("/room-detail/:id", getDetailRoom);
roomRoute.put("/room-edit/:id", editRoom);
roomRoute.delete("/room-delete/:id", deleteRoom);
module.exports = roomRoute;
