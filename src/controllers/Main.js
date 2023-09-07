const { default: axios } = require("axios");
const { request, response } = require("express");

//home page
const home = async (req = request, res = response) => {
  axios
    .get("http://localhost:5000/booking-daily")
    .then((response) => {
      const data = response.data.query;
      res.render("../views/index.handlebars", { data });
    })
    .catch((err) => {
      console.error(err);
    });
};

//create forms rooms
const createRoom = async (req = request, res = response) => {
  res.render("../views/component/FormRoom.handlebars");
};

module.exports = { home, createRoom };
