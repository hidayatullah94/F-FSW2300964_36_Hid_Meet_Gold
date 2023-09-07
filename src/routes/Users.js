const express = require("express");
const {
  createUser,
  getAllUsers,
  getDetailUser,
  updateUser,
  deleteUser,
} = require("../controllers/User");
const userRoute = express.Router();
userRoute.post("/user-create", createUser);
userRoute.get("/user-all", getAllUsers);
userRoute.get("/user-detail/:id", getDetailUser);
userRoute.put("/user-update/:id", updateUser);
userRoute.delete("/user-delete/:id", deleteUser);
module.exports = userRoute;
