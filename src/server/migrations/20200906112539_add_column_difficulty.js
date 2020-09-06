exports.up = function(knex) {
  return knex.schema.table('modules', function(table) {
    table.string('difficulty');
  });
};

exports.down = function(knex) {
  return knex.schema.table('modules', function(table) {
    table.dropColumn('difficulty');
  });
};
