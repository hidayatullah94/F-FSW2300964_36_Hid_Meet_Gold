const { request, response } = require("express");
const db = require("../db");

//!create rooms
const createRoom = async (req = request, res = response) => {
  try {
    const { name, capacity, facility, created } = await req.body;
    const findData = await db("rooms").select("name").where("name", name);

    if (findData.length) {
      return res.status(400).json({
        success: false,
        message: "data sudah tersedia",
      });
    } else {
      const createData = await db("rooms")
        .insert({
          name,
          capacity,
          facility,
          created: created === "" ? "noname" : created,
        })
        .returning(["name", "capacity", "facility", "created"]);
      res.status(201).json({
        success: true,
        message: "data berhasil ditambahkan",
        query: createData,
      });
    }
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//get all rooms
const getAllRooms = async (req = request, res = response) => {
  try {
    const getData = await db("rooms").select("*").orderBy("name", "asc");

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

//getDetail room
const getDetailRoom = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const getDetail = await db("rooms").select("*").where("roomID", id);

    res.status(200).json({
      succes: true,
      message: "data berhasil ditampilkan",
      query: getDetail,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//? edit rooms
const editRoom = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const { name, capacity, facility, created } = await req.body;

    const updateData = await db("rooms")
      .where("roomID", id)
      .update({
        name,
        capacity,
        facility,
        created,
      })
      .returning(["name", "capacity", "facility", "created"]);
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

//! delete room
const deleteRoom = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const deleteRoom = await db("rooms").where("roomID", id).del();
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
module.exports = {
  getAllRooms,
  createRoom,
  getDetailRoom,
  editRoom,
  deleteRoom,
};
