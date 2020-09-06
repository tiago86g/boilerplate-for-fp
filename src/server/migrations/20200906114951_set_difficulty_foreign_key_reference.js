exports.up = function(knex) {
  return knex.schema.table('modules', function(table) {
    table.dropColumn('difficulty');
    table.integer('difficulty_id').unsigned();
    table.foreign('difficulty_id').references('difficulty.id');
  });
};

exports.down = function(knex) {
  return knex.schema.table('modules', (table) => {
    table.dropForeign('difficulty_id');
    table.dropColumn('difficulty_id');
    table.string('difficulty');
  });
};
