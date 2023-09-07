const { request, response } = require("express");
const db = require("../db");
const argon2 = require("argon2");

//! CREATE USER
const createUser = async (req = request, res = response) => {
  try {
    const { name, nip, email, password, divisi } = await req.body;
    //hashing password
    const hash = await argon2.hash(password);
    //check tidak boleh kosong
    if (!name && !nip && !email && !password && !divisi) {
      return res.status(411).json({
        succes: false,
        message: "field ini wajib didisi",
      });
    }
    //check tidak boleh duplikat
    const findData = await db("users").select("nip").where("nip", nip);
    if (findData.length) {
      return res.status(400).json({
        success: false,
        message: "data sudah tersedia",
      });
    } else {
      const createData = await db("users")
        .insert({
          nip: nip,
          name: name,
          email: email,
          password: hash,
          divisi: divisi,
        })
        .returning(["nip", "name", "email", "divisi"]);
      res.status(201).json({
        succes: true,
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

// GET ALL USER
const getAllUsers = async (req = request, res = response) => {
  try {
    const getUser = await db("users").select("*").orderBy("name", "asc");
    res.status(200).json({
      succes: true,
      message: "data berhasil ditampilkan",
      query: getUser,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//GET DETAIL USER
const getDetailUser = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const getUser = await db("users").select("*").where("userId", id);
    res.status(200).json({
      succes: true,
      message: "data berhasil ditampilkan",
      query: getUser,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//? UPDATE USER
const updateUser = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const { name, nip, email, password, divisi } = await req.body;
    const hash = await argon2.hash(password);
    const update = await db("users")
      .where("userId", id)
      .update({
        name: name,
        nip: nip,
        divisi: divisi,
        email: email,
        password: hash,
      })
      .returning(["nip", "name", "email", "divisi"]);
    res.status(201).json({
      succes: true,
      message: "data berhasil diupdate",
      query: update,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//DELETE USER
const deleteUser = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const deletes = await db("users").where("userId", id).del();
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
  createUser,
  getAllUsers,
  getDetailUser,
  updateUser,
  deleteUser,
};
