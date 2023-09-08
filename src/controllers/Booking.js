const { request, response } = require("express");
const db = require("../db");
const moment = require("moment");

//! create booking
const createBooking = async (req = request, res = response) => {
  try {
    const { title, description, room, start, end, created } = await req.body;
    const starts = moment(start).format("YYYY-MM-DD HH:mm:ss");
    const ends = moment(end).format("YYYY-MM-DD HH:mm:ss");

    //chek data agar tidak duplikat
    const findBooking = await db("bookings")
      .where("room", room)
      .where("start", starts);

    if (findBooking.length) {
      return res.status(400).json({
        succes: false,
        message: "data sudah ada",
      });
    } else {
      const createData = await db("bookings")
        .insert({
          title: title,
          description: description,
          room: room,
          start: starts,
          end: ends,
          created: created === "" ? "ADMIN" : created,
        })
        .returning([
          "bookingID",
          "title",
          "description",
          "room",
          "start",
          "end",
          "created",
        ]);
      res.status(201).json({
        succes: true,
        message: "data berhasil dibuat",
        query: createData,
      });
    }
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.stack,
    });
  }
};

// getdetail booking
const getDetailBooking = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const getData = await db("bookings").where("bookingID", id);
    res.status(200).json({
      succes: true,
      message: "data berhasil ditampilkan",
      query: getData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//get all booking
const getAllBookings = async (req = request, res = response) => {
  try {
    const getData = await db("bookings").orderBy("createdAt", "desc");
    res.status(200).json({
      succes: true,
      message: "data berhasil ditampilkan",
      query: getData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//? update booking
const updateBooking = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const { title, description, room, start, end, created } = await req.body;
    const starts = moment(start).format("YYYY-MM-DD HH:mm:ss");
    const ends = moment(end).format("YYYY-MM-DD HH:mm:ss");

    const updateData = await db("bookings")
      .where("bookingID", id)
      .update({
        title: title,
        description: description,
        room: room,
        start: starts,
        end: ends,
        created: created,
      })
      .returning(["title", "description", "room", "start", "end", "created"]);
    res.status(201).json({
      succes: true,
      message: "data berhasil diupdate",
      query: updateData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//! delete booking
const deleteBooking = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const deleteData = await db("bookings").where("bookingID", id).del();
    res.status(201).json({
      succes: true,
      message: "data berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//daily booking
const getDailyBooking = async (req = request, res = response) => {
  try {
    const start = new Date();
    start.setUTCHours(0, 0, 0, 0);
    const end = new Date();
    end.setUTCHours(23, 59, 59, 999);

    const getData = await db("bookings").whereBetween("start", [start, end]);
    res.status(200).json({
      succes: true,
      message: "data berhasil ditampilkan",
      query: getData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
module.exports = {
  createBooking,
  getDetailBooking,
  getAllBookings,
  updateBooking,
  deleteBooking,
  getDailyBooking,
};
