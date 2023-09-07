/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("rooms").del();
  await knex("rooms").insert([
    {
      roomID: 1,
      name: "Ruang rapat inti",
      capacity: 500,
      facility: "layar, proyektor, meja, kursi, mic, ac, snack",
      created: "ADMIN",
    },
    {
      roomID: 2,
      name: "Ruang rapat besar",
      capacity: 100,
      facility: "monitor, meja, kursi,  ac, ",
      created: "ADMIN",
    },
    {
      roomID: 3,
      name: "Ruang rapat kecil",
      capacity: 50,
      facility: "tv, meja, kursi,  ac, ",
      created: "ADMIN",
    },
  ]);
};
