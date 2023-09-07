require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const app = express();
const { engine } = require("express-handlebars");
const path = require("path");
const userRoute = require("./routes/Users");
const roomRoute = require("./routes/Room");
const mainRoute = require("./routes/Main");
const db = require("./db");
const bookingRoute = require("./routes/Booking");
//midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set engine
app.set(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  engine({
    layoutsDir: path.join(__dirname, "/views/layout"),
    partialsDir: path.join(__dirname, "/views/component"),
    defaultLayout: path.join(__dirname, "/views/layout/main.handlebars"),
  })
);
//views
app.use(mainRoute);
//route
app.use(roomRoute);
app.use(bookingRoute);

//listen
app.listen(port, () => {
  console.log(`server run on ${port}`);
});
