/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bookings").del();
  await knex("bookings").insert([
    {
      bookingID: 1,
      title: "Meeting kordinasi cabang",
      description: "kordinasi mengenai aplikasi",
      room: "Ruang rapat inti",
      start: new Date(),
      end: new Date(),
      created: "ADMIN",
    },
    {
      bookingID: 2,
      title: "Meeting kordinasi cabang",
      description: "kordinasi mengenai aplikasi",
      room: "Ruang rapat besar",
      start: new Date(),
      end: new Date(),
      created: "ADMIN",
    },
    {
      bookingID: 3,
      title: "interview",
      description: "interview calon karyawan",
      room: "Ruang rapat kecil",
      start: new Date(),
      end: new Date(),
      created: "ADMIN",
    },
  ]);
};
