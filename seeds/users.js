/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      userId: 1,
      name: "hidayat",
      nip: "07092023",
      email: "hidayat01@gmail.com",
      password: "hidayat01@gmail.com",
      divisi: "IT",
    },
    {
      userId: 2,
      name: "alghifary",
      nip: "08092023",
      email: "alghifary01@gmail.com",
      password: "alghifary01@gmail.com",
      divisi: "IT",
    },
    {
      userId: 3,
      name: "dinda",
      nip: "09092023",
      email: "dinda01@gmail.com",
      password: "dinda01@gmail.com",
      divisi: "IT",
    },
  ]);
};
