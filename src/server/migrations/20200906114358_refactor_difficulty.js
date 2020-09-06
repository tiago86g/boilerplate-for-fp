exports.up = function(knex) {
  return knex.schema.createTable('difficulty', function(table) {
    table.increments();
    table.string('label');
    table.string('description');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('difficulty');
};
