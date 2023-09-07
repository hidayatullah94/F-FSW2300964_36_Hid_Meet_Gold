/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bookings", (table) => {
    table.increments("bookingID").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("room").notNullable();
    table.timestamp("start").notNullable();
    table.timestamp("end").notNullable();
    table.boolean("isCompleted").defaultTo(false);
    table.string("created");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("bookings");
};
