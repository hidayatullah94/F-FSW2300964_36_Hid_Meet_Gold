const { request, response } = require("express");

//home page
const home = async (req = request, res = response) => {
  res.render("../views/index.handlebars");
};

//create forms rooms
const createRoom = async (req = request, res = response) => {
  res.render("../views/component/FormRoom.handlebars");
};

module.exports = { home, createRoom };
