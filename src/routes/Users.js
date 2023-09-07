const express = require("express");
const { testing } = require("../controllers/User");
const userRoute = express.Router();
userRoute.post("/");
userRoute.get("/", testing);
userRoute.get("/:id");
userRoute.put("/:id");
userRoute.delete("/:id");
module.exports = userRoute;
