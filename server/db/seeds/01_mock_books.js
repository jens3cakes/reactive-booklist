
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Flowers in the Attic', author: 'V.C Andrews'},
        {id: 2, title: 'Watchers', author: 'Dean Koontz'},
        {id: 3, title: 'Coma', author: 'Robin Cook'}
      ]);
    });
};
