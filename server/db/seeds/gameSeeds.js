/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('games').del()
  await knex('games').insert([
    {id: 1, title: 'Grand Theft Auto V', genre:'open-world action game', score:10},
    {id: 2, title: 'Half-Life 2',genre:' first-person shooter ', score:9.7},
    {id: 3, title: 'Fallout: New Vegas', genre:'role-playing open-world combat', score:9},
    {id: 4, title: 'The Witcher 3: Wild Hunt', genre:'action role-playing open-world', score:9.3},
    {id: 5, title: 'The Elder Scrolls V: Skyrim', genre:'action role-playing open-world', score:9.5},
  ]);
};
