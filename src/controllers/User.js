const { request, response } = require("express");

const testing = async (req = request, res = response) => {
  try {
    res.render("../views/index.handlebars");
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

module.exports = { testing };
