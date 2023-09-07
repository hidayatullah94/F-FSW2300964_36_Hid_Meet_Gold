const { request, response } = require("express");
const db = require("../db");
const moment = require("moment");

//! create booking
const createBooking = async (req = request, res = response) => {
  try {
    const { title, description, ruang, start, end, create } = await req.body;
    const starts = moment(start).format("YYYY-MM-DD HH:mm:ss");
    const ends = moment(end).format("YYYY-MM-DD HH:mm:ss");

    const findData =
      await conn.$queryRaw`SELECT * FROM booking WHERE ruang_id =${ruang_id}
         
       AND status_booking="Disetujui" AND mulai= ${start}`;

    const findBooking = await db("bookings").where("room", )

    const createData = await db("bookings")
      .insert({
        title: title,
        description: description,
        ruang: ruang,
        start: starts,
        end: ends,
        create: create,
      })
      .returning([
        "bookingID",
        "title",
        "description",
        "ruang",
        "start",
        "end",
        "create",
      ]);
    res.status(201).json({
      succes: true,
      message: "data berhasil dibuat",
      query: createData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.stack,
    });
  }
};

// getdetail
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

module.exports = { createBooking, getDetailBooking };
