exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('difficulty')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('difficulty').insert([
        { label: 'Easy', description: 'These are the most easy modules' },
        {
          label: 'Intermediate',
          description:
            'These modules are a bit hard, make sure to complete the easy ones first',
        },
        {
          label: 'Hard',
          description:
            'Only the best students can do this! Make sure to complete intermediate modules first.',
        },
      ]);
    });
};
